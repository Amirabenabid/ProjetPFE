export class agenceModel {
  num_agence!: string;
    id_service: string ="";
    lieu!: string;
    governerat!: string;
    encombrement!: number;
    nom_agence!: string;
    lang : string ="";
    id_client : string = "";
    id!:number;
    token:string="";
  gps_x: any;
  gps_y: any;
    }

    export class agencePosition{
        gps_x:number=0;
        gps_y:number=0;
    }
