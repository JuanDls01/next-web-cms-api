-- CreateEnum
CREATE TYPE "CargoType" AS ENUM ('FCL', 'LCL');

-- CreateTable
CREATE TABLE "Cargo" (
    "id" SERIAL NOT NULL,
    "type" "CargoType" NOT NULL,
    "internTrackingNumber" TEXT NOT NULL,
    "trackingNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_internTrackingNumber_key" ON "Cargo"("internTrackingNumber");

-- AddForeignKey
ALTER TABLE "Cargo" ADD CONSTRAINT "Cargo_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
