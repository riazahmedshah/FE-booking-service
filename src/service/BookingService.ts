import axios from "axios";
import { BookingProps } from "../types/bookingTypes";
import { ServiceError } from "../utils/error/ServiceError";
// import { BookingRepository } from "../repositories/BookingRepository";

export class BookingService{
    static async createBooking(data:BookingProps): Promise<void>{
        try {
            const response = await axios.get(`http://localhost:1100/api/v1/flight/${data.flightId}`);
            const flightData = response.data.flight;
            if(data.noOfSeats && data.noOfSeats > flightData.totalSeats){
                throw new ServiceError("Something went wrong in service layer", "Insufficient Seats")
            }

            return await BookingService.createBooking({...data, totalCost:flightData.price, noOfSeats: flightData.totalSeats})
        } catch (error) {
            console.log(error)
            throw new ServiceError("Something went wrong in service layer");
        }

    }
}