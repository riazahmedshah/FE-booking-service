export interface BookingProps extends statusProps{
    userId:number,
    flightId:number,
    noOfSeats?: number,
    totalCost?:number
}

export interface statusProps{
    status:"IN_PROCESS" | "BOOKED" | "CANCELLED"
}