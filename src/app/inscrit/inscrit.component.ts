import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { anglais } from '../langueSetting/anglais';
import { arabe } from '../langueSetting/arabe';
import { fr } from '../langueSetting/fr';
import { clientModel } from '../model/client.model';
import { ClientService } from '../services/client.service';
import { emailValidator } from '../utils/validation';


interface IUser {
  name: string;
  nickname: string;
  email: string;
  telephone:string;
  message:string
}
@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {
  textsection27:any;  textsection28:any;  textsection29:any;  textsection30:any;


  reactiveForm!: FormGroup;
  user: IUser;
request: clientModel ;
  constructor(private clientService: ClientService,private formBuilder: FormBuilder) {
    this.user = {} as IUser;
    this.request= {} as clientModel;
  }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [
        Validators.maxLength(10),
      ]),
      telephone:new FormControl(this.user.telephone, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
   
    });
    this.reactiveForm.controls['name'].valueChanges.subscribe((value:string) => {
      this.request.nom=value;
    });
    this.reactiveForm.controls['nickname'].valueChanges.subscribe((value:string) => {

      this.request.prenom=value;
    });
    this.reactiveForm.controls['telephone'].valueChanges.subscribe((value:string) => {

      this.request.tel=value;
    });
   
localStorage.setItem('lang','2');
this.textsection27 = fr.inscrit[0];
this.textsection28=fr.inscrit[1];
this.textsection29=fr.inscrit[2];
this.textsection30 = fr.inscrit[3];
console.log('fr',fr.acceuil)
}
setLangueArabe(){
  localStorage.setItem('lang','1');
this.textsection27 = arabe.inscrit[0];
this.textsection28=arabe.inscrit[1];
this.textsection29=arabe.inscrit[2];
this.textsection30 = arabe.inscrit[3];

}
setLangueFrancais(){
  localStorage.setItem('lang','2');
this.textsection27 = fr.inscrit[0];
this.textsection28=fr.inscrit[1];
this.textsection29=fr.inscrit[2];
this.textsection30 = fr.inscrit[3];

}
setlangueAnglais(){
  localStorage.setItem('lang','3');
this.textsection27 = anglais.inscrit[0];
this.textsection28=anglais.inscrit[1];
this.textsection29=anglais.inscrit[2];
this.textsection30 = anglais.inscrit[3];
}
 




save(){
  this.request.id_client=7;
  this.request.token="ctKaD7IHbxU";

  this.clientService.createClient(this.request).subscribe((result: any)=>{
    if(result){
      if(result.id_client>0){
        alert('nouveau compte créer')
      }else if(result.id_client == undefined || result.id_client == null){
        alert('compte modifié avec succès');
      }

      alert('success');
    }
  })
}

  }





