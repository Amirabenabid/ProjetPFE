export class AgenceMapModel{
    agenceName!: string;
    agenceNum!: string;
    agenceGovernorat!: string;
    latitude!: number;
    longitude!: number;
    constructor(agenceName: string,agenceNum: string,agenceGovernorat: string, latitude: number, longitude: number){
        this.agenceName = agenceName;
        this.agenceNum = agenceNum;
        this.agenceGovernorat = agenceGovernorat;
        this.latitude = latitude;
        this.longitude = longitude;

    }
}