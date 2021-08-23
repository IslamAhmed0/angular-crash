import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import {Task} from '../Task';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpHeader = {
  headers: new HttpHeaders({
    'content-Type': 'application/json;'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private api = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return this.http.get <Task[]>(this.api);
  }
  // @ts-ignore
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.api}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // @ts-ignore
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.api}/${task.id}`;
    // @ts-ignore
    return this.http.put(url, task, httpHeader);
    console.log(httpHeader);

  }
  // @ts-ignore
  addTask(task: Task): Observable<Task>{
    // @ts-ignore
    return this.http.post(this.api, task, httpHeader);

  }
}
