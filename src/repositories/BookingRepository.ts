import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "../config/db";
import { BookingProps, statusProps } from "../types/bookingTypes";
import { ValidationError } from "../utils/error/ValidationError";
import { AppError } from "../utils/error/AppErrors";

export class BookingRepository{
    static async createBooking(data:BookingProps){
        try {
            return await prisma.booking.create({
                data:{
                    flightId:data.flightId,
                    userId:data.userId,
                    status:data.status,
                    noOfSeats:data.noOfSeats,
                    totalCost:data.totalCost,
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

    static async updateBooking(id:number, data: statusProps){
        try {
            return await prisma.booking.update({
                where:{
                    id
                },
                data:{
                    status: data.status
                },
            })
        } catch (error) {
            throw new AppError(
                "Repository Error",
                "Unable to update Booking",
                "There was an issue to update booking, please try again in some time."
            )
        }
    }
}