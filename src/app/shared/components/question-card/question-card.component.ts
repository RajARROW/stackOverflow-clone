import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  @Input() data;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getUserData(id) {
    console.log(id);
    this.router.navigateByUrl(`/profile/${id}`);
  }

}
