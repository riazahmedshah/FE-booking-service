import { StatusCodes } from "http-status-codes";

export class ValidationError extends Error{
    name:string;
    message:string;
    details?:any;
    statusCode:number;
    constructor(details?:any){
        super();

        this.name = "Validation Error";
        this.message = "Validation Failed";
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.details = details;
    }

}