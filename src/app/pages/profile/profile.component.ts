import { AfterViewInit, Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements AfterViewInit {

  userID;
  questionList = [];
  hasMore = true;
  tagData;
  userData;
  userAns;
  oldId;
  loader = false;
  currentPage = 1;

  constructor(private profileService: ProfileService, private activedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.oldId = this.userID;
        this.userID = this.activedRoute.snapshot.paramMap.get('id');
        console.log(this.userID, this.oldId);
        if (this.userID !== this.oldId) {
          this.loader = true;
          this.getData();
        }
      }
    });
  }

  ngAfterViewInit(): void {
    // this.getData();
  }

  getData() {
    if (this.userID) {
      am4core.useTheme(am4themes_animated);
      this.profileService.getProfile(this.userID, this.currentPage).subscribe((res: any) => {
        this.loader = false;
        this.questionList = [...this.questionList, ...res[2].items];
        this.hasMore = res[2].has_more;
        if (!this.userData) {
          this.tagData = res[1].items.map(tags => ({name: tags.name, count: tags.count}));
          this.userData = [res[0].items[0]];
          this.userAns = res[3].items.length;
          this.setWordChart(this.tagData);
        }
      });
    } else {
      this.profileService.getAllUsers().subscribe(res => {
        this.loader = false;
        this.userData = res;
      });
    }
  }

  setWordChart(data) {
    const chart = am4core.create('chartdiv', am4plugins_wordCloud.WordCloud);
    const series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;

    series.data = data;

    series.dataFields.word = 'name';
    series.dataFields.value = 'count';

    series.heatRules.push({
      target: series.labels.template,
      property: 'fill',
      min: am4core.color('#815893'),
      max: am4core.color('#F48024'),
      dataField: 'value'
    });

    series.labels.template.url = 'https://stackoverflow.com/questions/tagged/{word}';
    series.labels.template.urlTarget = '_blank';
    series.labels.template.tooltipText = '{word}: {value}';

    const hoverState = series.labels.template.states.create('hover');
    hoverState.properties.fill = am4core.color('#FF0000');

    const subtitle = chart.titles.create();
    subtitle.text = '(click to open)';

    const title = chart.titles.create();
    title.text = 'Users Top Tags';
    title.fontSize = 20;
    title.fontWeight = '800';
  }

  onScroll() {
    setTimeout(() => {
      if (this.hasMore) {
        this.getData();
      }
    }, 1500);
  }

}
