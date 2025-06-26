import {StatusCodes} from "http-status-codes"


export class AppError extends Error{
    name:string;
    message: string;
    details?:string;
    statusCode: number
    constructor(name:string,message:string, details?:string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
        super();
        this.name = name
        this.message = message,
        this.details = details,
        this.statusCode = statusCode
    }
}
