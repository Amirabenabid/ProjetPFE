import { Component, ElementRef, HostListener, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User.model';
import { Router } from '@angular/router';
import { fr } from './langueSetting/fr';
import { anglais } from './langueSetting/anglais';
import { arabe } from './langueSetting/arabe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  auth: string | null = null;
  textsection1:any;  textsection2:any;
  textsection3:any;textsection4:any;textsection5:any;textsection6:any;textsection7:any;
    textsection27:any;  textsection28:any;  textsection29:any;  textsection30:any;
  textsection31:any;  textsection32:any;  textsection33:any;
  textsection21:any;  textsection22:any;  textsection23:any;  textsection24: any;
  textsection25: any;  textsection26: any;


  constructor(private http: HttpClient,    private router: Router) { 
    this.auth = localStorage.getItem('isConnected');

  }
  title = 'Application';
  lat = 22.2736308;
  long = 70.7512555;
  topPosToStartShowing = 100;
  @ViewChild('target') private myScrollContainer: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('exampleModal') closebutton : ElementRef<any> = {} as ElementRef;
  @HostListener('window:scroll')

  
ngOnInit(): void {
setTimeout(() => {
  this.auth = localStorage.getItem('isConnected');
  
}, 2000);
   
localStorage.setItem('lang','2');
this.textsection1 = fr.acceuil[0];
this.textsection2=fr.acceuil[1];
this.textsection3=fr.acceuil[2];
this.textsection4=fr.acceuil[3];
this.textsection5=fr.acceuil[4];
this.textsection6=fr.acceuil[5];
this.textsection7=fr.acceuil[6];


this.textsection27 = fr.nav[0];
this.textsection28=fr.nav[1];
this.textsection29=fr.nav[2];
this.textsection30 = fr.nav[3];
this.textsection31=fr.nav[4];
this.textsection32=fr.nav[5];
this.textsection33=fr.nav[6];

this.auth = localStorage.getItem('isConnected');
}
setLangueArabe(){
  localStorage.setItem('lang','1');
  this.textsection1 = arabe.home[0];
  this.textsection2=arabe.home[1];
  this.textsection3=arabe.home[2];
  this.textsection4=arabe.home[3];
  this.textsection5=arabe.home[4];
  this.textsection6=arabe.home[5];
  this.textsection7=arabe.home[6];


this.textsection21 = arabe.identifier[0];
this.textsection22=arabe.identifier[1];
this.textsection23=arabe.identifier[2];
this.textsection24=arabe.identifier[3];
  this.textsection25=arabe.identifier[4];
  this.textsection26=arabe.identifier[5];

this.textsection27 = arabe.nav[0];
this.textsection28=arabe.nav[1];
this.textsection29=arabe.nav[2];
this.textsection30 = arabe.nav[3];
this.textsection31=arabe.nav[4];
this.textsection32=arabe.nav[5];
this.textsection33=arabe.nav[6];

}
setLangueFrancais(){
  localStorage.setItem('lang','2');
  this.textsection1 = fr.acceuil[0];
  this.textsection2=fr.acceuil[1];
  this.textsection3=fr.acceuil[2];
  this.textsection4=fr.acceuil[3];
  this.textsection5=fr.acceuil[4];
  this.textsection6=fr.acceuil[5];
  this.textsection7=fr.acceuil[6];


this.textsection21 = fr.identifier[0];
this.textsection22=fr.identifier[1];
this.textsection23=fr.identifier[2];
this.textsection24=fr.identifier[3];
this.textsection25=fr.identifier[4];
this.textsection26=fr.identifier[5];

this.textsection27 = fr.nav[0];
this.textsection28=fr.nav[1];
this.textsection29=fr.nav[2];
this.textsection30 = fr.nav[3];
this.textsection31=fr.nav[4];
this.textsection32=fr.nav[5];
this.textsection33=fr.nav[6];

}
setlangueAnglais(){
  localStorage.setItem('lang','3');
    this.textsection1 = anglais.home[0];
    this.textsection2=anglais.home[1];
    this.textsection3=anglais.home[2];
    this.textsection4=anglais.home[3];
    this.textsection5=anglais.home[4];
    this.textsection6=anglais.home[5];
    this.textsection7=anglais.home[6];


this.textsection21 = anglais.identifier[0];
this.textsection22=anglais.identifier[1];
this.textsection23=anglais.identifier[2];
this.textsection24=anglais.identifier[3];
this.textsection25=anglais.identifier[4];
this.textsection26=anglais.identifier[5];


this.textsection27 = anglais.nav[0];
this.textsection28=anglais.nav[1];
this.textsection29=anglais.nav[2];
this.textsection30 = anglais.nav[3];
this.textsection31=anglais.nav[4];
this.textsection32=anglais.nav[5];
this.textsection33=anglais.nav[6];

}
 




  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    
    
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
err:number = 0;

  user = new User();
 
  
}
