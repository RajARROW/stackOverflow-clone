import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questionList = [];
  hasMore = true;
  loader = true;
  currentPage = 1;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loader = true;
    this.getData();
  }

  getData() {
    this.homeService.getQuesiton(this.currentPage++).subscribe((res: any) => {
      this.loader = false;
      this.questionList = [...this.questionList, ...res.items];
      this.hasMore = res.has_more;
    });
  }

  onScroll() {
    setTimeout(() => {
      if (this.hasMore) {
        this.getData();
      }
    }, 1400);
  }

}
