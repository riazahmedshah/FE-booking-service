import { Request, Response } from "express";
import { BookingService } from "../service/BookingService";
import { ResponseHandler } from "../utils/ResponseHandler";

export const createBooking = async (req:Request, res:Response) => {
    const body = req.body
    try {
        const result = await BookingService.createBooking(body);
        return ResponseHandler.json(res, {result})
    } catch (error) {
        return ResponseHandler.json(res, {error}, 500);
    }
}