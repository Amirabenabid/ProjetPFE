import { ticketResponse, servicesModel, rdvModel } from './../model/ticket.model';
import { Component, OnInit } from '@angular/core';
import {  ticketModel } from '../model/ticket.model';
import { TicketService } from '../services/ticket.service'; 
import { AgenceService } from '../services/agence.service'; 
import { Location } from '@angular/common';
import { Observable,Subscription, interval  } from 'rxjs';

import { fr } from '../langueSetting/fr';
import { arabe } from '../langueSetting/arabe';
import { anglais } from '../langueSetting/anglais';
import * as _ from 'lodash';
import { request } from 'http';
@Component({
  selector: 'app-services',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServicesComponent implements OnInit {
  private updateSubscription!: Subscription;
  apiURL: string = 'http://wsmobile.expressdisplay.net/v1/compte';
 num_agence:string | null = "";
 idService: string = "";
 ticketResponse : ticketResponse ;
 startDate:any;
 rdvRequest: rdvModel;
endDate:any;
  services : any []= [];
  lastnum: string = "";
  lasttrait:string="";
  
  textsection21:any; textsection22:any;  textsection23:any;
  textsection24:any;  textsection25:any; textsection26:any;   textsection27:any;
  textsection28:any;  textsection29:any; textsection30:any;   textsection31:any;
  textsection32:any;  textsection33:any; textsection34:any;   textsection35:any;
  agence: any;

  /*  request: services; */
  constructor(
    private ticketService: TicketService,
    private agenceService: AgenceService,
    private location: Location) {
   this.ticketResponse= {} as ticketResponse;
   this.rdvRequest={} as rdvModel;
  
  }
  ngOnInit(): void {
    this.num_agence = localStorage.getItem('num_agence');
this.getAgenceServices();

this.updateSubscription = interval(3000).subscribe(
  (val) => { this.getAgenceServices()});


  localStorage.setItem('lang','2');
  this.textsection21 = fr.service[0];
  this.textsection22=fr.service[1];
  this.textsection23=fr.service[2];
  this.textsection24=fr.service[3];
  this.textsection25=fr.service[4];
  this.textsection26=fr.service[5];
  this.textsection27=fr.service[6];
  this.textsection28=fr.service[7];
  this.textsection29=fr.service[8];
  this.textsection30=fr.service[9];
  this.textsection31=fr.service[10];
  this.textsection32=fr.service[11];
  this.textsection33=fr.service[12];
  this.textsection34=fr.service[13];
  console.log('fr',fr.service)
}
setLangueArabe(){
  localStorage.setItem('lang','1');
  this.textsection21 = arabe.service[0];
  this.textsection22=arabe.service[1];
  this.textsection23=arabe.service[2];
  this.textsection24=arabe.service[3];
  this.textsection25=arabe.service[4];
  this.textsection26=arabe.service[5];
  this.textsection27=arabe.service[6];
  this.textsection28=arabe.service[7];
  this.textsection29=arabe.service[8];
  this.textsection30=arabe.service[9];
  this.textsection31=arabe.service[10];
  this.textsection32=arabe.service[11];
  this.textsection33=arabe.service[12];
  this.textsection34=arabe.service[13];
  
}
setLangueFrancais(){
  localStorage.setItem('lang','2');
  this.textsection21 = fr.service[0];
  this.textsection22=fr.service[1];
  this.textsection23=fr.service[2];
  this.textsection24=fr.service[3];
  this.textsection25=fr.service[4];
  this.textsection26=fr.service[5];
  this.textsection27=fr.service[6];
  this.textsection28=fr.service[7];
  this.textsection29=fr.service[8];
  this.textsection30=fr.service[9];
  this.textsection31=fr.service[10];
  this.textsection32=fr.service[11];
  this.textsection33=fr.service[12];
  this.textsection34=fr.service[13];
  
}
setlangueAnglais(){
  localStorage.setItem('lang','3');
  this.textsection21 = anglais.service[0];
  this.textsection22=anglais.service[1];
  this.textsection23=anglais.service[2];
  this.textsection24=anglais.service[3];
  this.textsection25=anglais.service[4];
  this.textsection26=anglais.service[5];
  this.textsection27=anglais.service[6];
  this.textsection28=anglais.service[7];
  this.textsection29=anglais.service[8];
  this.textsection30=anglais.service[9];
  this.textsection31=anglais.service[10];
  this.textsection32=anglais.service[11];
  this.textsection33=anglais.service[12];
  this.textsection34=anglais.service[13];
  
}
 
private getAgenceServices(){
  this.agenceService.getAgenceByNum(this.num_agence).subscribe((response:any)=>{
    this.services = response.agence.services;
    this.agence = response.agence;
    console.log(response);
    if(this.idService)
    console.log(this.agence.services[this.idService].lastnum);
    console.log("nbattente :"+response.agence.nbattente)
        })
}

async checkAvailability(){
  //console.log(this.startDate.year+'-'+this.startDate.month+'-'+this.startDate.day,this.endDate)

 //this.ticketService.priseRDV(this.startDate.year+'-'+this.startDate.month+'-'+this.startDate.day,this.endDate.year+'-'+this.endDate.month+'-'+this.endDate.day).subscribe((response:any)=>{
  //  console.log('res',response)
  //}) 
 const events = [];
 const data =  await  this.ticketService.priseRDV()?.subscribe(res =>{
  console.log('data',res)
 })


  }

 saveTicket(event:any){
    const button = event.target;
    this.idService = button.id;
    let request = new ticketModel() ;
    request.id_service = this.idService;
    request.lang= 1 ;
    request.id_client="123";
    request.id_agence= this.num_agence;
    request.token= "ctKaD7IHbxU:APA91bGoFuaSdhgyRLEi6ofPNP";

    this.ticketService.reserveTicket(request).subscribe((response: any) => {
      this.ticketResponse = response.infoticket;
      _.debounce(() => {
        if(this.ticketResponse){
          console.log('service',this.ticketResponse)
          alert("ticket reserved successfully!");
        }else {
          alert("Champ(s) requis est (sont) manquant(s) ou vide(s)");
        }
      },300)()
    })
  } 


  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

 
  
}
