import express from "express"
import { v1BookingRoutes } from "./v1/bookingRoutes";

export const router = express.Router();

router.use("/v1", v1BookingRoutes);