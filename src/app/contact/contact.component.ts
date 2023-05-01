import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { anglais } from '../langueSetting/anglais';
import { arabe } from '../langueSetting/arabe';
import { fr } from '../langueSetting/fr';

import { emailValidator } from '../utils/validation';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  message:string
}

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;
  textsection1:any;textsection2:any;textsection3:any;
   textsection4:any;  textsection5:any;
  textsection6:any;  textsection7:any;  textsection8:any;

  textsection9:any;  textsection10:any;   textsection11:any;  textsection12:any; 

  textsection13:any;  textsection14:any;   textsection15:any;  textsection16:any;  textsection17:any; 
  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    localStorage.setItem('lang','2');
    this.textsection1 = fr.contact[0];
    this.textsection2=fr.contact[1];
    this.textsection3=fr.contact[2];
    this.textsection4=fr.contact[3];
    this.textsection5=fr.contact[4];
    this.textsection6=fr.contact[5];
    this.textsection7=fr.contact[6];
    this.textsection8=fr.contact[7];
    this.textsection9=fr.contact[8];
    this.textsection10=fr.contact[9];
    this.textsection11=fr.contact[10];
    this.textsection12=fr.contact[11];
    this.textsection13=fr.contact[12];
    this.textsection14=fr.contact[13];
    this.textsection15=fr.contact[14];
    this.textsection16=fr.contact[15];
    this.textsection17=fr.contact[16];
  
    console.log('fr',fr.contact)
   
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
   
    });
  }

  setLangueArabe(){
    localStorage.setItem('lang','1');
    this.textsection1 = arabe.contact[0];
    this.textsection2=arabe.contact[1];
    this.textsection3=arabe.contact[2];
    this.textsection4=arabe.contact[3];
    this.textsection5=arabe.contact[4];
    this.textsection6=arabe.contact[5];
    this.textsection7=arabe.contact[6];
    this.textsection8=arabe.contact[7];
    this.textsection9=arabe.contact[8];
    this.textsection10=arabe.contact[9];
    this.textsection11=arabe.contact[10];
    this.textsection12=arabe.contact[11];
    this.textsection13=arabe.contact[12];
    this.textsection14=arabe.contact[13];
    this.textsection15=arabe.contact[14];
    this.textsection16=arabe.contact[15];
    this.textsection17=arabe.contact[16];

  }
  setLangueFrancais(){
    localStorage.setItem('lang','2');
    this.textsection1 = fr.contact[0];
    this.textsection2=fr.contact[1];
    this.textsection3=fr.contact[2];
    this.textsection4=fr.contact[3];
    this.textsection5=fr.contact[4];
    this.textsection6=fr.contact[5];
    this.textsection7=fr.contact[6];
    this.textsection8=fr.contact[7];
    this.textsection9=fr.contact[8];
    this.textsection10=fr.contact[9];
    this.textsection11=fr.contact[10];
    this.textsection12=fr.contact[11];
    this.textsection13=fr.contact[12];
    this.textsection14=fr.contact[13];
    this.textsection15=fr.contact[14];
    this.textsection16=fr.contact[15];
    this.textsection17=fr.contact[16];

  
  }
  setlangueAnglais(){
    localStorage.setItem('lang','3');
    this.textsection1 = anglais.contact[0];
    this.textsection2=anglais.contact[1];
    this.textsection3=anglais.contact[2];
    this.textsection4=anglais.contact[3];
    this.textsection5=anglais.contact[4];
    this.textsection6=anglais.contact[5];
    this.textsection7=anglais.contact[6];
    this.textsection8=anglais.contact[7]; 
    this.textsection9=anglais.contact[8];
    this.textsection10=anglais.contact[9];
    this.textsection11=anglais.contact[10];
    this.textsection12=anglais.contact[11];
    this.textsection13=anglais.contact[12];
    this.textsection14=anglais.contact[13];
    this.textsection15=anglais.contact[14];
    this.textsection16=anglais.contact[15];
    this.textsection17=anglais.contact[16];

  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get nickname() {
    return this.reactiveForm.get('nickname')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info('Name:', this.user.name);
    console.info('Nickname:', this.user.nickname);
    console.info('Email:', this.user.email);
    
  }








  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          alert(`Votre position est : ${latitude}, ${longitude}`);
        },
        error => {
          console.error(error);
          alert(`Impossible d'obtenir votre position`);
        }
      );
    } else {
      alert(`La géolocalisation n'est pas supportée par votre navigateur`);
    }
  }


  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false })
  gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 36.8665;
  lng = 10.1647;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }



}
