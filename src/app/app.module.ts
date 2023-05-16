
import { InscritComponent } from './inscrit/inscrit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { CaricatureComponent } from './caricature/caricature.component';
import { AgencesComponent } from './agences/agences.component';
import { CompteComponent } from './compte/compte.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AvisComponent } from './avis/avis.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule,HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { AgenceService } from './services/agence.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServicesComponent } from './agenceService/service.component';
import {TicketService} from './services/ticket.service';
import { AvisService } from './services/avis.service';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { HistoriqueService } from './services/historique.service';
import { SmsService } from './services/sms.service';
import { AproposComponent } from './apropos/apropos.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { GoogleMapComponent } from './google-map/google-map.component';
@NgModule({
  declarations: [
    AppComponent,
    IdentifierComponent,
    MapComponent,
    InscritComponent,
    AcceuilComponent,
    ContactComponent,
    CaricatureComponent,
    AgencesComponent,
    ServicesComponent,
    CompteComponent,
    ModifierComponent,
    AjouterComponent,
    AproposComponent,
    AvisComponent,
    TestComponent,
    Test2Component,
    GoogleMapComponent,
 

  ],
  imports: [
    GooglePlaceModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InternationalPhoneNumberModule,
    
    
  ],
  providers: [ClientService,
              AgenceService,
              TicketService,
              AvisService,
              HistoriqueService,
              SmsService, 
           
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
