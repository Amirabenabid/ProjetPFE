import { rdvModel } from './../model/ticket.model';
import { apiURL } from './../config';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ticketModel } from '../model/ticket.model';




@Injectable()

export class TicketService {
  num_agence:string="";
    constructor(private http: HttpClient , ){
    }
      

     priseRDV(){
      const httpOptions = {
        headers: new HttpHeaders(),
          'Content-Type':  'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' ,
          'Username':'test1',
          'Password':'expressexpress1+',
          "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "X-Requested-With": "XMLHttpRequest",
          'Access-Control-Allow-Credentials': true
      };


      try{
       var response=  this.http.get("http://192.168.1.21/api/v2.0/me/Events",httpOptions);
        console.log('Logged');
        console.log (response);
        return response;
      }catch(error){
        console.log('Erreur',error);
        return null;
      }
       

      }

    reserveTicket(request:ticketModel){
        const httpOptions = {
            headers: new HttpHeaders({

              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
            
          };
            

var button ="id_service=" + request.id_service +"&lang=" + request.lang+ "&id_client="+request.id_client + "&id_agence=" + request.id_agence + "&token=" +request.token  ;
return this.http.post("http://wsmobile.expressdisplay.net/v1/reservation",button,httpOptions);
    }

    
    getAgenceByNum(num_agence:string | null){
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
          })
        };
  return this.http.get( "http://wsmobile.expressdisplay.net/v1/agence/"+num_agence,httpOptions);  
  }

  /*   consultclient(id: number): Observable<clientModel>{
      return this.http.get<clientModel>(this.apiURL, id,);
    } */
    

}