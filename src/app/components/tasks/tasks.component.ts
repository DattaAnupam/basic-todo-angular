import { Component, OnInit } from '@angular/core';

import { ITask } from '../../Task';
import { TaskService } from '../../services/task.service';

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
    this.taskService.getTasksSvc().subscribe((tasks) => (this.tasks = tasks));
  }

  // delete the specified task from db
  deleteTask = (task: ITask) => {
    this.taskService.deleteTaskSvc(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  };

  // updates a property in db
  toggleReminderStatus = (task: ITask) => {
    this.taskService.toggleReminderStatusSvc(task).subscribe();
  };

  // add a new task in db
  addTask = (task: ITask) => {
    this.taskService
      .addTaskSvc(task)
      .subscribe((task) => this.tasks.push(task));
  };
}
