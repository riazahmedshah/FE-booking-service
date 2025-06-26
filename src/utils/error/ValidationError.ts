import { StatusCodes } from "http-status-codes";

export class ValidationError extends Error{
    message:string;
    details?:any;
    statusCode:number;
    constructor(message = "Validation Failed",details?:any,statusCode = StatusCodes.BAD_REQUEST){
        super();

        this.message = message;
        this.details = details;
        this.statusCode = statusCode;
    }

}