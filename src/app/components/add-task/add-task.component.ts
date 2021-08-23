import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  date: string;
  reminder:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onsubmit(){
    if (!this.text){
      alert('plz add a task');
      return;
    }
    const newTask = {
      text: this.text,
      date: this.date,
      reminder: this.reminder,
    };
    // @ts-ignore
    // console.log(newTask);
    this.onAddTask.emit(newTask);
    this.text = '';
    this.reminder = false;
    this.date = '';
  }

}
