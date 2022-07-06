import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TASKS } from '../mock-tasks';
import { ITask } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks = (): Observable<ITask[]> => {
    const tasks = of(TASKS);
    return tasks;
  };
}
