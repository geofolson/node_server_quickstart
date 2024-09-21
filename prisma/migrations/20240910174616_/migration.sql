/*
  Warnings:

  - Added the required column `nonsense2` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "nonsense2" TEXT NOT NULL;
