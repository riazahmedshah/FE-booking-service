import {StatusCodes} from "http-status-codes"


export class ServiceError extends Error{
    name:string;
    message: string;
    details?:string;
    statusCode: number
    constructor(message:string, details?:string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
        super();
        this.name = "Service Error"
        this.message = message,
        this.details = details,
        this.statusCode = statusCode
    }
}