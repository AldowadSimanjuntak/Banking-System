/*
  Warnings:

  - A unique constraint covering the columns `[account_number]` on the table `BankAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateAt` to the `BankAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankAccount" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "account_number" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "transaction_detail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_account_number_key" ON "BankAccount"("account_number");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_account_number_fkey" FOREIGN KEY ("account_number") REFERENCES "BankAccount"("account_number") ON DELETE RESTRICT ON UPDATE CASCADE;
