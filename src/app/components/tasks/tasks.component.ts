import { Component, OnInit } from '@angular/core';

import { ITask } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
