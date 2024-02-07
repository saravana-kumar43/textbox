import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';

import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { style } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    FormsModule,
    // BrowserModule,
  ],
})
export class AppComponent {
  [x: string]: any;
 
  vk=false;
  textColor: string = 'black';
  fontSize: number = 16;
  fontStyle: string = 'normal';
  contentText: string = '';
  textboxName: string = 'textbox1';
  textboxWidth: string ='' ;
  textboxHeight: string = '';
  textAlignment: string = 'left';
  

    controls:any[]=[
      {type: 'text'},
      
    ];
    
    formFields: any[]=[];
    selectedField: any;
    
    
    onDrop(event:CdkDragDrop<any[]>){
      const control=this.controls[event.previousIndex];
      this.addControl(control);
      moveItemInArray(this.controls,event.previousIndex,event.currentIndex);
    }
    
   
    

    addControl(control:any){;
      this.formFields.push({ ...control})
    }

    
    property(field: any) {
      this.vk = !this.vk;
      this.selectedField = field; 
      console.log(field);
    }
    alignText(align: string) {
      this.textAlignment = align;
    }
    addNewTextbox() {
      const newTextbox = {
        type: 'text',
        contentText: '',
        textColor: this.textColor,
        fontSize: this.fontSize,
        fontStyle: this.fontStyle,
        textboxName: '',
        textboxWidth: '',
        textboxHeight: '',
        textAlignment: this.textAlignment
      };
      this.formFields.push(newTextbox);
    }
  }
    
