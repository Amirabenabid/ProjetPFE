
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { SMS } from '../model/sms.model';



@Injectable()

export class SmsService {
    constructor(private http: HttpClient){
    }
    apiurl='http://sms.expressdisplay.net/v1/sendsms';

    sendsms(request: SMS){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
          };
var body ="msg=" + request.msg +"&tel=" + request.tel;
return this.http.post("http://sms.expressdisplay.net/v1/sendsms",body,httpOptions);
    }




  
    isloggedin(){
      return sessionStorage.getItem('username')!=null;
    }


    GetUserbyCode(id:any){
      return this.http.get(this.apiurl+'/'+id);
    }
}