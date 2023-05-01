import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { anglais } from '../langueSetting/anglais';
import { arabe } from '../langueSetting/arabe';
import { fr } from '../langueSetting/fr';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  http: any;
  textsection27:any;  textsection28:any;  textsection29:any;  textsection30:any;
  textsection31:any;  textsection32:any; 
  constructor() { }

  ngOnInit(): void {
    
this.textsection27 = fr.modifier[0];
this.textsection28=fr.modifier[1];
this.textsection29=fr.modifier[2];
this.textsection30 = fr.modifier[3];
this.textsection31=fr.modifier[4];
this.textsection32=fr.modifier[5];
console.log('fr',fr.acceuil)
}
setLangueArabe(){
  localStorage.setItem('lang','1');

this.textsection27 = arabe.modifier[0];
this.textsection28=arabe.modifier[1];
this.textsection29=arabe.modifier[2];
this.textsection30 = arabe.modifier[3];
this.textsection31=arabe.modifier[4];
this.textsection32=arabe.modifier[5];

}
setLangueFrancais(){
  localStorage.setItem('lang','2');
this.textsection27 = fr.modifier[0];
this.textsection28=fr.modifier[1];
this.textsection29=fr.modifier[2];
this.textsection30 = fr.modifier[3];
this.textsection31=fr.modifier[4];
this.textsection32=fr.modifier[5];

}
setlangueAnglais(){
  localStorage.setItem('lang','3');
this.textsection27 = anglais.modifier[0];
this.textsection28=anglais.modifier[1];
this.textsection29=anglais.modifier[2];
this.textsection30 = anglais.modifier[3];
this.textsection31=anglais.modifier[4];
this.textsection32=anglais.modifier[5];

  }
  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
   
localStorage.setItem('lang','2');

}
 




}
