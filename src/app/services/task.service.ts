import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ITask } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  // returns array of task (pre-defined)
  getTasks = (): Observable<ITask[]> => {
    return this.http.get<ITask[]>(this.apiUrl);
  };

  // delets a particular task
  deleteTask(task: ITask): Observable<ITask[]> {
    const delTaskUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<ITask[]>(delTaskUrl);
  }
}
