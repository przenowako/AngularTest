import { Component, OnInit } from '@angular/core';
import { trigger,animate,style,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations:[
     trigger("moveInLeft",[
        transition("void=> *",[style({transform:"translateX(300px)"}),
          animate(200,keyframes([
           style({transform:"translateX(300px)"}),
           style({transform:"translateX(0)"})
            ]))]),
            transition("*=>void",[style({transform:"translateX(0px)"}),
          animate(100,keyframes([
           style({transform:"translateX(0px)"}),
           style({transform:"translateX(300px)"})
            ]))])
     	])
    ]
})
export class TodoComponent implements OnInit {
  todoArray: any[] = [];
  value: number = 0;
  precision: number = 0;
    todo: any;
    //todoForm: new FormGroup()

     addTodo(value: any): void {
      if(value!==""){
       this.todoArray.push(value);
      //console.log(this.todos)
    }else{
      alert('Field required **')
    }
    }

    /*delete item*/
    deleteItem(todo: any){
    	for(let i=0 ;i<= this.todoArray.length ;i++){
    		if(todo== this.todoArray[i]){
    			this.todoArray.splice(i,1)
    		}
    	}
    }

    // submit Form
    todoSubmit(value:any){
       if(value!==""){
      this.todoArray.push(value)
      }else{
        alert('Wprowadz dane!')
      }

    }

  constructor() { }

  ngOnInit(): void {
  }

}
