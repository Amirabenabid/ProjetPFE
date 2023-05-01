import { agenceModel } from './agence.model';
export class ResponseModel{
    error!: string;
    message!: string;
    agences!: agenceModel[];
}