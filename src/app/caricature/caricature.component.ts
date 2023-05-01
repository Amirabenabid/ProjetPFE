import { Component, OnInit } from '@angular/core';   
   @Component({       
 selector: 'caricature',    
    templateUrl: './caricature.component.html',     
   styleUrls: ['./caricature.component.css']    })   
  
  export class CaricatureComponent {  
      constructor() { }   
 
      gotoTop() {
         window.scroll({ 
           top: 0, 
           left: 0, 
           behavior: 'smooth' 
         });
       }
     
     }
     