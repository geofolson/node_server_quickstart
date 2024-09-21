/*
  Warnings:

  - You are about to drop the `Animal_Types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product_Types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Animal_Types";

-- DropTable
DROP TABLE "Product_Types";

-- DropTable
DROP TABLE "User_Credentials";

-- DropTable
DROP TABLE "User_Profile";

-- CreateTable
CREATE TABLE "animalTypes" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "animalTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productTypes" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "productTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userProfile" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "userProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userCredentials" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "userCredentials_pkey" PRIMARY KEY ("id")
);
