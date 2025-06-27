export interface BookingProps{
    userId:number,
    flightId:number,
    status: "IN_PROCESS" | "BOOKED" | "CANCELLED",
    noOfSeats?: number,
    totalCost?:number
}