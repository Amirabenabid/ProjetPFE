import { Injectable } from '@angular/core';
import { profil } from '../model/profil.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ProfilService {
 
  apiURL: string = 'http://localhost:8080/profils/api';

  profils: profil[] = []; 

  constructor(private http : HttpClient) {
  }

   listeProfil(numTel : string | null){
    return this.http.get(this.apiURL+'/'+numTel);
    }
 
  

  ajouterProfil( prof: profil):Observable<profil>{
      return this.http.post<profil>(this.apiURL, prof, httpOptions);
      }
      
      consulterProfil(id: number): Observable<profil> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<profil>(url);
        }
        
        updateProfil(prof :profil) : Observable<profil>
{
return this.http.put<profil>(this.apiURL, prof, httpOptions);
}
}
