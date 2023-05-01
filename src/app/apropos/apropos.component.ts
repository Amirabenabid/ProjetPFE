import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { anglais } from '../langueSetting/anglais';
import { arabe } from '../langueSetting/arabe';
import { fr } from '../langueSetting/fr';
import { agenceModel } from '../model/agence.model';
import { AgenceService } from '../services/agence.service';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit{
  auth: string | null = null;
  textsection1:any;
  textsection2:any;
  textsection3:any;
  textsection4:any;
  textsection5:any;
  textsection6:any;
  textsection7:any;
  textsection8:any;
  textsection9:any;
  textsection10:any;
  textsection11:any;
  textsection12:any;
  textsection13:any;

  constructor(private agenceService: AgenceService,  private router: Router) {
   
  }
  agences : any[] = [];
  heure_ouverture:string = "";
  heure_fermeture:string = "";
  gps_x:string="";
  gps_y:string="";
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  ngOnInit(): void {
   
      localStorage.setItem('lang','2');
      this.textsection1 = fr.apropos[0];
      this.textsection2=fr.apropos[1];
      this.textsection3=fr.apropos[2];
      this.textsection4=fr.apropos[3];
      this.textsection5=fr.apropos[4];
      this.textsection6=fr.apropos[5];
      this.textsection7=fr.apropos[6];
      this.textsection8=fr.apropos[7];
      this.textsection9=fr.apropos[8];
      this.textsection10=fr.apropos[9];
      this.textsection11=fr.apropos[10];
      this.textsection12=fr.apropos[11];
      this.textsection13=fr.apropos[12];
      console.log('fr',fr.apropos)
    this.agenceService.afficheagence().subscribe((result: any)=>{
      this.agences = result.agences;
    console.log('test',result );
    })
  }
  setLangueArabe(){
    localStorage.setItem('lang','1');
    this.textsection1 = arabe.apropos[0];
    this.textsection2=arabe.apropos[1];
    this.textsection3=arabe.apropos[2];
    this.textsection4=arabe.apropos[3];
    this.textsection5=arabe.apropos[4];
    this.textsection6=arabe.apropos[5];
    this.textsection7=arabe.apropos[6];
    this.textsection8=arabe.apropos[7];
    this.textsection9=arabe.apropos[8];
    this.textsection10=arabe.apropos[9];
    this.textsection11=arabe.apropos[10];
    this.textsection12=arabe.apropos[11];
    this.textsection13=arabe.apropos[12];
  }
  setLangueFrancais(){
    localStorage.setItem('lang','2');
    this.textsection1 = fr.apropos[0];
    this.textsection2=fr.apropos[1];
    this.textsection3=fr.apropos[2];
    this.textsection4=fr.apropos[3];
    this.textsection5=fr.apropos[4];
    this.textsection6=fr.apropos[5];
    this.textsection7=fr.apropos[6];
    this.textsection8=fr.apropos[7];
    this.textsection9=fr.apropos[8];
    this.textsection10=fr.apropos[9];
    this.textsection11=fr.apropos[10];
    this.textsection12=fr.apropos[11];
    this.textsection13=fr.apropos[12];
  }
  setlangueAnglais(){
    localStorage.setItem('lang','3');
    this.textsection1 = anglais.apropos[0];
    this.textsection2=anglais.apropos[1];
    this.textsection3=anglais.apropos[2];
    this.textsection4=anglais.apropos[3];
    this.textsection5=anglais.apropos[4];
    this.textsection6=anglais.apropos[5];
    this.textsection7=anglais.apropos[6];
    this.textsection8=anglais.apropos[7];
    this.textsection9=anglais.apropos[8];
    this.textsection10=anglais.apropos[9];
    this.textsection11=anglais.apropos[10];
    this.textsection12=anglais.apropos[11];
    this.textsection13=anglais.apropos[12];
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
  
  




  getLocation(event: any){
    const button=event.target;
    this.agenceService.getAgenceByNum(button.id).subscribe((response:any)=>{
      this.gps_x =      response.agence.gps_x ;
      this.gps_y =   response.agence.gps_y ;
    })

  }
}