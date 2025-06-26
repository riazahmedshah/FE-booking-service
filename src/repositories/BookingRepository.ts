import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "../config/db";
import { BookingProps } from "../types/bookingTypes";
import { ValidationError } from "../utils/error/ValidationError";
import { AppError } from "../utils/error/AppErrors";

export class BookingRepository{
    static async createBooking(data:BookingProps){
        try {
            return await prisma.booking.create({
                data:{
                    ...data
                }
            })
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === "P2002"){
                    throw new ValidationError(error.message,error.meta);
                }
            }
            throw new AppError(
                "Repository Error",
                "Unable to create Booking",
                "There was an issue, please try again in some time."
            )

        }
    }
}