import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { ITask } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // base input task
  @Input() task: ITask = {
    id: 0,
    text: 'no task',
    day: 'no day',
    reminder: false,
  };

  // 'x' mark from font-awesome
  faXmark = faXmark;

  // output variable for event emitter
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  OnClick(task: ITask) {
    this.onDeleteTask.emit(task);
  }
}
