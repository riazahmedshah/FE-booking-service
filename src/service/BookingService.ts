import axios from "axios";
import { BookingProps } from "../types/bookingTypes";
import { ServiceError } from "../utils/error/ServiceError";
import { BookingRepository } from "../repositories/BookingRepository";
// import { BookingRepository } from "../repositories/BookingRepository";

export class BookingService{
    static async createBooking(data:BookingProps){
        try {
            const flightresponse = await axios.get(`http://localhost:1100/api/v1/flight/${data.flightId}`);
            const flightData = flightresponse.data.flight;
            if(data.noOfSeats && data.noOfSeats > flightData.totalSeats){
                throw new ServiceError("Something went wrong in service layer", "Insufficient Seats")
            }
            const totalcost = flightData.totalSeats*flightData.price
            const booking =  await BookingRepository.createBooking({
                ...data, 
                totalCost:totalcost
            });

            await axios.patch(`http://localhost:1100/api/v1/flight/${data.flightId}`, {
                totalSeats : flightData.totalSeats - booking.noOfSeats
            });

            const finalBooking = await BookingRepository.updateBooking(booking.id, {
                status: "BOOKED"
            })

            return finalBooking
        } catch (error) {
            console.log(error)
            throw new ServiceError("Something went wrong in service layer");
        }

    }
}