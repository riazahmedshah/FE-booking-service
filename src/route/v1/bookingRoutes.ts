import express from "express"
import { createBooking } from "../../controllers/BookingController";


export const v1BookingRoutes = express.Router();

v1BookingRoutes.post("/booking", createBooking);
