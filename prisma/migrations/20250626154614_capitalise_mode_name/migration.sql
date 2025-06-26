/*
  Warnings:

  - You are about to drop the `booking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "booking";

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'IN_PROCESS',

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
