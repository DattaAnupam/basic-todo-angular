import { Component, OnInit, Input } from '@angular/core';

import { ITask } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask = {
    id: 0,
    text: 'no task',
    day: 'no day',
    reminder: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
