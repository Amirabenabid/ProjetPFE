import { HistoriqueService } from './../services/historique.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historiqueModel, historiqueResponse } from '../model/historique.model';
import { profil } from '../model/profil.model';
import { ProfilService } from '../services/profil.service';
import { anglais } from '../langueSetting/anglais';
import { arabe } from '../langueSetting/arabe';
import { fr } from '../langueSetting/fr';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  apiURL: string = 'http://wsmobile.expressdisplay.net/v1/mesreservation';
  request!: historiqueModel;
  historiqueResponse:historiqueResponse;
  tickets : any []= [];
  id_client:string | null = "";
  auth : string | null ="";

  num_ticket: string= "";
  profil?: profil[]; 
  historiqueModel: historiqueModel;
  num_agence: string="";
  date_print: string ="";
  heure_print: string ="";
  called:string="";
  jour_semaine:string="";
  nom_agence:string = "";
  HistoriqueService: any;
  
  textsection1:any;textsection2:any;textsection3:any;
   textsection4:any;  textsection5:any;
  textsection6:any;  textsection7:any;  textsection8:any;
  textsection9:any;  textsection10:any;   textsection11:any;  textsection12:any; 
  textsection13:any;  textsection14:any;   textsection15:any;  textsection16:any;  textsection17:any;
  textsection18:any;  textsection19:any;

  constructor( private router: Router, private historiqueService:HistoriqueService,private profilService: ProfilService) {
    this.historiqueModel= {} as historiqueModel;
    this.historiqueResponse= {} as historiqueResponse;

   }

  ngOnInit(): void {
    localStorage.setItem('lang','2');
    this.textsection1 = fr.compte[0];
    this.textsection2=fr.compte[1];
    this.textsection3=fr.compte[2];
    this.textsection4=fr.compte[3];
    this.textsection5=fr.compte[4];
    this.textsection6=fr.compte[5];
    this.textsection7=fr.compte[6];
    this.textsection8=fr.compte[7];
    this.textsection9=fr.compte[8];
    this.textsection10=fr.compte[9];
    this.textsection11=fr.compte[10];
    this.textsection12=fr.compte[11];
    this.textsection13=fr.compte[12];
    this.textsection14=fr.compte[13];
    this.textsection15=fr.compte[14];
    this.textsection16=fr.compte[15];
    this.textsection17=fr.compte[16];
    this.textsection18=fr.compte[17];
    this.textsection19=fr.compte[18];

    console.log('fr',fr.compte)
   
    this.id_client= "123";
    this.chargerprofils();


    this.auth = localStorage.getItem('isConnected');
   
    }



    
  setLangueArabe(){
    localStorage.setItem('lang','1');
    this.textsection1 = arabe.compte[0];
    this.textsection2=arabe.compte[1];
    this.textsection3=arabe.compte[2];
    this.textsection4=arabe.compte[3];
    this.textsection5=arabe.compte[4];
    this.textsection6=arabe.compte[5];
    this.textsection7=arabe.compte[6];
    this.textsection8=arabe.compte[7];
    this.textsection9=arabe.compte[8];
    this.textsection10=arabe.compte[9];
    this.textsection11=arabe.compte[10];
    this.textsection12=arabe.compte[11];
    this.textsection13=arabe.compte[12];
    this.textsection14=arabe.compte[13];
    this.textsection15=arabe.compte[14];
    this.textsection16=arabe.compte[15];
    this.textsection17=arabe.compte[16];
    this.textsection18=arabe.compte[17];
    this.textsection19=arabe.compte[18];

  }
  setLangueFrancais(){
    localStorage.setItem('lang','2');
    this.textsection1 = fr.compte[0];
    this.textsection2=fr.compte[1];
    this.textsection3=fr.compte[2];
    this.textsection4=fr.compte[3];
    this.textsection5=fr.compte[4];
    this.textsection6=fr.compte[5];
    this.textsection7=fr.compte[6];
    this.textsection8=fr.compte[7];
    this.textsection9=fr.compte[8];
    this.textsection10=fr.compte[9];
    this.textsection11=fr.compte[10];
    this.textsection12=fr.compte[11];
    this.textsection13=fr.compte[12];
    this.textsection14=fr.compte[13];
    this.textsection15=fr.compte[14];
    this.textsection16=fr.compte[15];
    this.textsection17=fr.compte[16];
    this.textsection18=fr.compte[17];
    this.textsection19=fr.compte[18];


  
  }
  setlangueAnglais(){
    localStorage.setItem('lang','3');
    this.textsection1 = anglais.compte[0];
    this.textsection2=anglais.compte[1];
    this.textsection3=anglais.compte[2];
    this.textsection4=anglais.compte[3];
    this.textsection5=anglais.compte[4];
    this.textsection6=anglais.compte[5];
    this.textsection7=anglais.compte[6];
    this.textsection8=anglais.compte[7]; 
    this.textsection9=anglais.compte[8];
    this.textsection10=anglais.compte[9];
    this.textsection11=anglais.compte[10];
    this.textsection12=anglais.compte[11];
    this.textsection13=anglais.compte[12];
    this.textsection14=anglais.compte[13];
    this.textsection15=anglais.compte[14];
    this.textsection16=anglais.compte[15];
    this.textsection17=anglais.compte[16];
    this.textsection18=anglais.compte[17];
    this.textsection19=anglais.compte[18];

  }

    getnumAgence(event:any){
      let agenceId = event.target;
      this.num_agence = agenceId.id;
    }
  getHistorique(){
   
     
    this.historiqueService.getReservation(this.id_client).subscribe((response: any) => {
      this.tickets = response.tickets;
      console.log('tickets',this.tickets)

    }) 
  }
  chargerprofils(){
    this.profilService.listeProfil().subscribe(profs => {
      console.log(profs);
      this.profil = profs;
      });
}
getdeconnect(){
   
  localStorage.removeItem('isConnected');
  
  this.historiqueService.getReservation(this.id_client).subscribe((response: any) => {
    this.tickets = response.tickets;
    console.log('tickets',this.tickets)

  }) 
}

}