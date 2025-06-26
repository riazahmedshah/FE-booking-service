import {StatusCodes} from "http-status-codes"


export class AppError extends Error{
    message: string;
    details?:string;
    statusCode: number
    constructor(message:string, details?:string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
        super();
        this.message = message,
        this.details = details,
        this.statusCode = statusCode
    }
}
