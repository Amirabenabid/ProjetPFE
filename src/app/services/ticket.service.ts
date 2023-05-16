import { rdvModel } from './../model/ticket.model';
import { apiURL } from './../config';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ticketModel } from '../model/ticket.model';
import { Observable } from 'rxjs';




@Injectable()

export class TicketService {
  num_agence:string="";
    constructor(private http: HttpClient , ){
    }
      

     priseRDV(startDate: Date, endDate: Date, top:number, login: string, pwd: string): Observable<any>{
     /*  const httpOptions = {
        headers: new HttpHeaders(),
          'Content-Type':  'application/x-www-form-urlencoded', 
          'Authorization': 'Basic' ,
          'Username':'express',
          'Password':'express@2023',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "X-Requested-With": "XMLHttpRequest",
          'Access-Control-Allow-Credentials': true 
      }; */
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa('express:express@2023')
        })
      };
      let url = "http://41.231.54.66/wsxchange/v1/getxchange/"+startDate.toISOString()+"/"+endDate.toISOString()+"/"+top+"/"+login+"/"+pwd;
      return this.http.get(url, httpOptions);
      /* try{
       var response=  this.http.get("http://41.231.54.66/wsxchange/v1/getxchange/2023-05-05%2015:00:23/2023-05-15%2015:00:23/1/user1/expressexpress1+",httpOptions);
        console.log('Logged');
        console.log (response);
        return response;
      }catch(error){
        console.log('Erreur',error);
        return null;
      } */
       

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