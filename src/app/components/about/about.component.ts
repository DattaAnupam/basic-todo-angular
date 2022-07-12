import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  gitRepoUrl: string = 'https://github.com/DattaAnupam/basic-todo-angular';
  constructor() {}

  ngOnInit(): void {}
}
