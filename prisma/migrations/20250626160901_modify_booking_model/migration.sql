/*
  Warnings:

  - Added the required column `flightId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "flightId" INTEGER NOT NULL,
ADD COLUMN     "noOfSeats" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "totalCost" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
