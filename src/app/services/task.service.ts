import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ITask } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  // GET
  // returns array of task
  getTasksSvc = (): Observable<ITask[]> => {
    return this.http.get<ITask[]>(this.apiUrl);
  };

  // DELETE
  // delets a particular task
  deleteTaskSvc = (task: ITask): Observable<ITask[]> => {
    const delTaskUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask[]>(delTaskUrl);
  };

  // PUT
  // updates reminder property(only) of task
  toggleReminderStatusSvc = (task: ITask) => {
    task.reminder = !task.reminder;
    const updateRemStatusUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(updateRemStatusUrl, task, httpOptions);
  };

  // POST
  // Add a new task
  addTaskSvc = (task: ITask): Observable<ITask> => {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  };
}
