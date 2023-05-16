export class exchange{
    error!: string;
    message!: string;
    infoxchange!: any[];
    constructor (error: string, message: string, infoxchange: any[]){
        this.error = error;
        this.message = message;
        this.infoxchange = infoxchange;
    }
}