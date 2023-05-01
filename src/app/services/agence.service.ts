import { Observable } from 'rxjs';
import { apiURL } from './../config';
import { agenceModel } from './../model/agence.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ResponseModel } from '../model/response.model';



@Injectable()

export class AgenceService {
 
    constructor(private http: HttpClient){
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

    afficheagence(): Observable<ResponseModel>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
          };
return this.http.get<ResponseModel>( "http://wsmobile.expressdisplay.net/v1/allagences",httpOptions);
    }

    getLocation(gps_x :string , gps_y:string){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
        })
      };
return this.http.get( "http://wsmobile.expressdisplay.net/v1/agences/"+gps_x +gps_y,httpOptions);  
}

    }

  /*   consultclient(id: number): Observable<clientModel>{
      return this.http.get<clientModel>(this.apiURL, id,);
    } */

