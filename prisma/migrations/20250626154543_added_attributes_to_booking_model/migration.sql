/*
  Warnings:

  - Added the required column `userId` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_PROCESS', 'BOOKED', 'CANCELLED');

-- AlterTable
ALTER TABLE "booking" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'IN_PROCESS',
ADD COLUMN     "userId" INTEGER NOT NULL;
