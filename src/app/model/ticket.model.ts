export class ticketModel {
    id_service: string="";
    lang: number=0;
    id_client: string="";
    id_agence:string | null ="";
    token:string="";
    }
    export class rdvModel {
        startDate:string="";
        enddate:string="";
    }


export class ticketResponse {
    numeroticket: string="";
    nbattente: number=0;
    date: string ="";
    heure: string ="";
    service:string="" ;
    agence:string = ""
   
}

export class servicesModel{
    lastnum:string="";
    lasttrait:string="";
}