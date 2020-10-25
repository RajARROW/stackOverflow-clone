import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: '<div class="bg-primary-lighter px-4 py-1 rounded-md text-sm font-light w-auto inline-block ml-1 mb-1">{{tagName}}</div>'
})
export class TagComponent implements OnInit {

  @Input() tagName;
  constructor() { }

  ngOnInit(): void {
  }

}
