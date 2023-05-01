import { Observable } from 'rxjs';
import { apiURL } from './../config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { avisModel } from '../model/avis.model';



@Injectable()

export class AvisService {
    constructor(private http: HttpClient){
    }

    apiURL= "http://wsmobile.expressdisplay.net/v1/note";


    Noter(request: avisModel){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
          };
          var button ="id_agence=" + request.id_agence +"&id_client=" + request.id_client+ "&commentaire="+request.commentaire + "&etoile=" + request.etoile ;
return this.http.post("http://wsmobile.expressdisplay.net/v1/note",button,httpOptions);
    }

  /*   consultclient(id: number): Observable<clientModel>{
      return this.http.get<clientModel>(this.apiURL, id,);
    } */

}