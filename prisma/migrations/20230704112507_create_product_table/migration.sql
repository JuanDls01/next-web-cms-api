-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "prize" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
