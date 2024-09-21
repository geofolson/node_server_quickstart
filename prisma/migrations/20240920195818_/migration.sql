/*
  Warnings:

  - You are about to drop the `animalTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userCredentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "animalTypes";

-- DropTable
DROP TABLE "productTypes";

-- DropTable
DROP TABLE "userCredentials";

-- DropTable
DROP TABLE "userProfile";

-- CreateTable
CREATE TABLE "AnimalType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "AnimalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCredential" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "UserCredential_pkey" PRIMARY KEY ("id")
);
