import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ITask } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit = () => {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    if (!this.day) {
      alert('Please add a day');
      return;
    }

    const newTask: ITask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    // set back to the initial values after form submit
    this.text = '';
    this.day = '';
    this.reminder = false;
  };
}
