import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Task } from "../models/task";


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  tasks: Task[];

  constructor(fb: FormBuilder) {
      this.tasks = [];
  }

  
  ngOnInit() {
  }

  addTask(nome){  
    let task = new Task(nome);
    this.tasks.push(task);
  }  
  
  delTask(id){  
  this.tasks.splice(id, 1);
}

  

}
