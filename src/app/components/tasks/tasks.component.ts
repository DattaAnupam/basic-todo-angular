import { Component, OnInit } from '@angular/core';

import { ITask } from '../../Task';
import { TaskService } from '../../services/task.service';
import { TemplateBindingParseResult } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // get tasks using task.service
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: ITask) {
    // delete the specified task from db
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
}
