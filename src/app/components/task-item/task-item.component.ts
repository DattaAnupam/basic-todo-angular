import { Component, OnInit, Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ITask } from '../../Task';

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

  faXmark = faXmark;

  constructor() {}

  ngOnInit(): void {}
}
