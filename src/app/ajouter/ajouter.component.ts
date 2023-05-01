import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { anglais } from '../langueSetting/anglais';
import { arabe } from '../langueSetting/arabe';
import { fr } from '../langueSetting/fr';
import { profil } from '../model/profil.model';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {


  newprofil = new profil();
  newIdst! : number;
  textsection27:any;  textsection28:any;  textsection29:any;  textsection30:any;
  textsection31:any;  textsection32:any; 
 
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private profilService: ProfilService) { }
  ngOnInit(): void {
 
this.textsection27 = fr.ajouter[0];
this.textsection28=fr.ajouter[1];
this.textsection29=fr.ajouter[2];
this.textsection30 = fr.ajouter[3];
this.textsection31=fr.ajouter[4];
this.textsection32=fr.ajouter[5];
console.log('fr',fr.acceuil)
}
setLangueArabe(){
  localStorage.setItem('lang','1');

this.textsection27 = arabe.ajouter[0];
this.textsection28=arabe.ajouter[1];
this.textsection29=arabe.ajouter[2];
this.textsection30 = arabe.ajouter[3];
this.textsection31=arabe.ajouter[4];
this.textsection32=arabe.ajouter[5];

}
setLangueFrancais(){
  localStorage.setItem('lang','2');
this.textsection27 = fr.ajouter[0];
this.textsection28=fr.ajouter[1];
this.textsection29=fr.ajouter[2];
this.textsection30 = fr.ajouter[3];
this.textsection31=fr.ajouter[4];
this.textsection32=fr.ajouter[5];

}
setlangueAnglais(){
  localStorage.setItem('lang','3');
this.textsection27 = anglais.ajouter[0];
this.textsection28=anglais.ajouter[1];
this.textsection29=anglais.ajouter[2];
this.textsection30 = anglais.ajouter[3];
this.textsection31=anglais.ajouter[4];
this.textsection32=anglais.ajouter[5];

  }
  addprofil(){
  
    this.profilService.ajouterProfil(this.newprofil).subscribe(prof => {
    console.log(prof);
    this.router.navigate(['profils']);
    });
    }
}
