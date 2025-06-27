import axios from "axios";
import { BookingProps } from "../types/bookingTypes";
import { ServiceError } from "../utils/error/ServiceError";
import { BookingRepository } from "../repositories/BookingRepository";

export class BookingService{
    static async createBooking(data:BookingProps){
        try {
            const response = await axios.get(`http://localhost:1200/flight/${data.flightId}`);
            const flightData = response.data;
            console.log(flightData);
            // await BookingRepository.createBooking(data);
        } catch (error) {
            throw new ServiceError("Something went wrong in service layer");
        }

    }
}