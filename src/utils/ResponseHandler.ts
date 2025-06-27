import { Response } from "express";

export class ResponseHandler{
    static json(res:Response, data:Record<string,any>, status = 200){
        if(data){
            res.status(status).json(data);
        } else{
            res.status(status);
        }
    }
}