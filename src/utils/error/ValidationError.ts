import { StatusCodes } from "http-status-codes";

export class ValidationError extends Error{
    name:string;
    message:string;
    details?:string;
    statusCode:number;
    constructor(statusCode:StatusCodes.BAD_REQUEST, details?:any,){
        super();
        this.name = "Validation Error";
        this.message = "Validation Failed";
        this.statusCode = statusCode;
        this.details = details;
    }

}