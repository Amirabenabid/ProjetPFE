import { SmsService } from './../services/sms.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneNumber } from 'google-libphonenumber';
import { SMS } from '../model/sms.model';
import * as _ from 'lodash';


import { fr } from '../langueSetting/fr';
import { arabe } from '../langueSetting/arabe';
import { anglais } from '../langueSetting/anglais';

@Component({
  selector: 'app-root',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.scss'],
 
})
export class IdentifierComponent implements OnInit {
  codeGenerer: string="";
  codeSaisi: string="";
  codesended: boolean = false;
  reactiveForm!: FormGroup;
  phone!: string;
  myForm: FormGroup;
  phoneNumber!: PhoneNumber;
  verificationCode!: string;
  msg: string = "";
  tel: string= "" ;
  textsection21:any;
  textsection22:any;
  textsection23:any;
  textsection24: any;
  textsection25: any;
  textsection26: any;
  
/*   onSubmit(): void {
    const countryCode = this.phoneNumber.substring(0, this.phoneNumber.indexOf(' '));
    const phoneNumber = this.phoneNumber.substring(this.phoneNumber.indexOf(' ') + 1);
    console.log('Country Code:', countryCode);
    console.log('Phone Number:', phoneNumber);
  } */
  constructor(private route:Router,private SmsService:SmsService,public formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      phone: new FormControl('', [Validators.required])
      
    });
  }

  ngOnInit(): void {
    this.codesended = false;
    this.reactiveForm = this.formBuilder.group({
      phoneNumber:["",
        Validators.maxLength(10)],
        codeSaisi:["",
        Validators.maxLength(10)]
      })
   this.reactiveForm.controls['phoneNumber'].valueChanges.subscribe((value:string) => {
    this.tel=value;
  });
  this.reactiveForm.controls['codeSaisi'].valueChanges.subscribe((value:string) => {
    this.codeSaisi=value;
  });
  
  localStorage.setItem('lang','2');
  this.textsection21 = fr.identifier[0];
  this.textsection22=fr.identifier[1];
  this.textsection23=fr.identifier[2];
  this.textsection24=fr.identifier[3];
    this.textsection25=fr.identifier[4];
    this.textsection26=fr.identifier[5];

  console.log('fr',fr.identifier)
  }    
  setLangueArabe(){
    localStorage.setItem('lang','1');
    this.textsection21 = arabe.identifier[0];
    this.textsection22=arabe.identifier[1];
    this.textsection23=arabe.identifier[2];
    this.textsection24=arabe.identifier[3];
    this.textsection25=arabe.identifier[4];
    this.textsection26=arabe.identifier[5];

  }
  setLangueFrancais(){
    localStorage.setItem('lang','2');
    this.textsection21 = fr.identifier[0];
    this.textsection22=fr.identifier[1];
    this.textsection23=fr.identifier[2];
    this.textsection24=fr.identifier[3];
    this.textsection25=fr.identifier[4];
    this.textsection26=fr.identifier[5];

  }
  setlangueAnglais(){
    localStorage.setItem('lang','3');
    this.textsection21 = anglais.identifier[0];
    this.textsection22=anglais.identifier[1];
    this.textsection23=anglais.identifier[2];
    this.textsection24=anglais.identifier[3];
    this.textsection25=anglais.identifier[4];
    this.textsection26=anglais.identifier[5];

  }
  displayCode(){
    this.codesended = true;
    const factor = 10000; // facteur pour rendre le nombre plus grand
    this.codeGenerer = (Math.floor(Math.random() * factor)).toString(); // nombre aléatoire entre 0 et 9999
    this.msg= "Utiliser le code "+this.codeGenerer+" pour l'authentification."
    //const phone = this.phoneNumber != null ? this.phoneNumber.getNationalNumber : '';
    
 
   var request = new SMS() ;
   request.msg=this.msg;
   request.tel = this.tel;
   localStorage.setItem('numTel', this.tel);
   console.log('num', this.tel )
   this.SmsService.sendsms(request).subscribe((response: any) => {
    this.msg= response.msg;
    this.tel=response.tel;

    _.debounce(() => {
      if(this.SmsService){
        console.log('service',this.SmsService)
        alert("message envoyée avec succé!");
      }else {
        alert("Champ(s) requis est (sont) manquant(s) ou vide(s)");
      }
    },300)()
  })
  }


gotoagence(){

  if (this.codeSaisi === this.codeGenerer) {
    localStorage.setItem('isConnected', 'yes')

    console.log("Le code saisi est le même que le code envoyé.");
    this.route.navigate(['agences'])
    // Effectuer les actions souhaitées, par exemple valider une adresse e-mail
  } else {
    console.log("Le code saisi est différent du code envoyé.");
    // Afficher un message d'erreur ou effectuer une action alternative, par exemple demander à l'utilisateur de saisir le code à nouveau
  }
}



    checkScroll() {
        
     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      console.log('[scroll]', scrollPosition);
      
    }
 
    gotoTop() {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  err:number = 0;
  
   
   
    
}


