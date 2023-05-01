
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { historiqueModel } from '../model/historique.model';




@Injectable()

export class HistoriqueService {
    constructor(private http: HttpClient){
    }

/*     
    getAgenceByNum(num_agence:string | null){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
          };
    return this.http.get( "http://wsmobile.expressdisplay.net/v1/agence/"+num_agence,httpOptions);  
    } */

     

    
    getReservation(id_client:string | null){
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
          })
        };
  return this.http.get( "http://wsmobile.expressdisplay.net/v1/mesreservation/"+id_client,httpOptions);  
  }
  
  
    /*   consultclient(id: number): Observable<clientModel>{
        return this.http.get<clientModel>(this.apiURL, id,);
      } */
  
  }
  /*   consultclient(id: number): Observable<clientModel>{
      return this.http.get<clientModel>(this.apiURL, id,);
    } */
    

