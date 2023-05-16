import { AvisService } from './../services/avis.service';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { agenceModel } from '../model/agence.model';
import { AgenceService } from '../services/agence.service';
import { avisModel } from '../model/avis.model';
import * as _ from 'lodash';


import { fr } from '../langueSetting/fr';
import { arabe } from '../langueSetting/arabe';
import { anglais } from '../langueSetting/anglais';
import { AgenceMapModel } from '../model/agenceMapModel.model';

declare var google: any;

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  request: agenceModel ;
  avis:avisModel;
  avisModel: any;
  num_agence:string="";
auth : string | null ="";

  agencePosition: any = { lat: 0, lng: 0 };
 textsection34: any;
  textsection35: any; textsection36: any;
  textsection37: any; textsection38: any;
  textsection39: any;
  textsection40: any;  textsection41: any;  textsection42: any;  textsection43: any;



  
  constructor(private agenceService: AgenceService, private router: Router, private avisService:AvisService) {
   
    this.request= {} as agenceModel;
    this.avis= {} as avisModel;

  }
   myLatitude!: number;
   myLongitude!: number;
   agenceDatasToMap : AgenceMapModel[] = [];
  
  getGeolocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) =>{
        if(position){
          this.myLongitude = position.coords.longitude;
          this.myLatitude = position.coords.latitude;
          console.log("lng"+this.myLongitude);
          console.log("lat"+this.myLatitude);        
        }},(error: GeolocationPositionError) => console.log(error));
      }else{
        alert("dsq")
      }
    }
  
  agences : agenceModel[] = [];
  agencesSorted : agenceModel[] = [];
  heure_ouverture:string = "";
  heure_fermeture:string = "";
  gps_x:string="";
  gps_y:string="";

  services : any[] = [];
  id_client: string= "";
  review: string= "";
  etoile: string= "";
  
  
 ngOnInit() {
    this.getGeolocation();
    this.auth = localStorage.getItem('isConnected');
     this.loadAgencesData();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        
        
      });
       this.sortByLocation(this.agencesSorted, this.myLatitude, this.myLongitude);
    }

  localStorage.setItem('lang','2');
  this.textsection34 = fr.agence[0];
  this.textsection35=fr.agence[1];
  this.textsection36 = fr.agence[2];
  this.textsection37=fr.agence[3];
  this.textsection38 = fr.agence[4];
  this.textsection39=fr.agence[5];
  this.textsection40=fr.agence[6];
  this.textsection41=fr.agence[7];
  this.textsection42=fr.agence[8];
  this.textsection43=fr.agence[9];
  
  }    
  setLangueArabe(){
    localStorage.setItem('lang','1');
    this.textsection34 = arabe.agence[0];
    this.textsection35=arabe.agence[1];
    this.textsection36 = arabe.agence[2];
    this.textsection37=arabe.agence[3];
    this.textsection38 = arabe.agence[4];
    this.textsection39=arabe.agence[5];
    this.textsection40=arabe.agence[6];
    this.textsection41=arabe.agence[7];
    this.textsection42=arabe.agence[8];
    this.textsection43=arabe.agence[9];
  }
  setLangueFrancais(){
    localStorage.setItem('lang','2');
    this.textsection34 = fr.agence[0];
    this.textsection35=fr.agence[1];
    this.textsection36 = fr.agence[2];
    this.textsection37=fr.agence[3];
    this.textsection38 = fr.agence[4];
    this.textsection39=fr.agence[5];
    this.textsection40=fr.agence[6];
    this.textsection41=fr.agence[7];
    this.textsection42=fr.agence[8];
    this.textsection43=fr.agence[9];
  }
  setlangueAnglais(){
    localStorage.setItem('lang','3');
    this.textsection34 = anglais.agence[0];
    this.textsection35=anglais.agence[1];
    this.textsection36 = anglais.agence[2];
  this.textsection37=anglais.agence[3];
  this.textsection38 = anglais.agence[4];
  this.textsection39=anglais.agence[5];
  this.textsection40=anglais.agence[6];
  this.textsection41=anglais.agence[7];
  this.textsection42=anglais.agence[8];
  this.textsection43=anglais.agence[9];


  }
 loadAgencesData(){
    this.agenceService.afficheagence().subscribe(result=>{
      
      this.agences = result.agences.sort((a: agenceModel, b: agenceModel)=>{
        
        return    b.gps_x-a.gps_x  ||  b.gps_y -  a.gps_y ;
      });
      result.agences.forEach(agence => {
        this.agenceDatasToMap.push(new AgenceMapModel(agence.nom_agence,agence.num_agence, agence.governerat, agence.gps_x, agence.gps_y))
      });
      
    console.log('test',this.agenceDatasToMap );
    });
  }

  getDirection(event: any){
    
    console.log("hedha target"+event.target.id);
    let gps_x : number;
    let gps_y : number;
    let goUrl= "http://www.google.com/maps/place/36.900628,10.123177";
    this.agences.forEach((agence)=>{
      if(agence.num_agence == event.target){
          console.log("mrigl nul="+agence.num_agence);
      }
    });
   }
  

  
  
  

  getnumAgence(event:any){
    let agenceId = event.target;
    this.num_agence = agenceId.id;
  }
  getEtoile(value:any){
    this.etoile = value.value;
  }
  getNote(event:any){

    var avis = new avisModel() ;
    avis.id_agence= this.num_agence;
    avis.id_client="123";
    avis.commentaire= this.review;
    avis.etoile= this.etoile;
   this.avisService.Noter(avis).subscribe((response: any) => {
      this.avisModel = response.message;
      _.debounce(() => {
        if(this.avisModel){
          alert(response.message);
        }else {
          alert("Champ(s) requis est (sont) manquant(s) ou vide(s)");
        }
      },300)()
    }) 
  }
  


  goToService(event: any){
    const button = event.target;
    localStorage.setItem('num_agence', button.id);
    console.log('but',button.id)
    this.router.navigate(["services"]);
  }
  getAgence(event:any){
    const button = event.target;
    this.agenceService.getAgenceByNum(button.id).subscribe((response:any)=>{
      this.heure_ouverture =      response.agence.horaire_ouverture ;
      this.heure_fermeture =   response.agence.heure_fermeture ;
    })

  }
  getLocation(event: any){
    const button=event.target;
    this.agenceService.getAgenceByNum(button.id).subscribe((response:any)=>{
      this.gps_x =      response.agence.gps_x ;
      this.gps_y =   response.agence.gps_y ;
    })

  }
  getAgenceLocation(id: number):google.maps.LatLng{
    let positionToGo = new google.maps.LatLng();
     this.agencesSorted.find(agence =>{
      if (agence.id == id) {
        console.log(agence.gps_x)
      positionToGo =  new google.maps.LatLng(agence.gps_x, agence.gps_y);
        
      }
    });
    console.log(id)
    return positionToGo;
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
agenceRoute(){ 
  console.log("Hahaha")
}




sortByLocation(agences: agenceModel[],myLatitude : number, myLongitude: number){
  let sortedAgences : agenceModel[];
   this.agences.forEach(agence => {
    
    this.agencesSorted.push(agence);
    console.log("agence1"+agence.id);
  });
  
}

 }