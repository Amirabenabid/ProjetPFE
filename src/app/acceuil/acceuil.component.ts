import { Component } from '@angular/core';
import { fr } from '../langueSetting/fr';
import { arabe } from '../langueSetting/arabe';
import { anglais } from '../langueSetting/anglais';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  auth: string | null = null;
  textsection1:any;
  textsection2:any;
  textsection3:any;
  textsection4:any;
  textsection5:any;
  textsection6:any;
  textsection7:any;
  ngOnInit(): void {
    localStorage.setItem('lang','2');
    this.textsection1 = fr.acceuil[0];
    this.textsection2=fr.acceuil[1];
    this.textsection3=fr.acceuil[2];
    this.textsection4=fr.acceuil[3];
    this.textsection5=fr.acceuil[4];
    this.textsection6=fr.acceuil[5];
    this.textsection7=fr.acceuil[6];
    console.log('fr',fr.acceuil)
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
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
}
