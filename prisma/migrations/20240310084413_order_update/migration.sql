/*
  Warnings:

  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `addressId` VARCHAR(191) NULL,
    ADD COLUMN `comment` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `dont_ring_the_doorbell` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `leave_it_at_the_door` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `typePayment` ENUM('cash_to_courier', 'payment_by_terminal_to_the_courier') NOT NULL DEFAULT 'cash_to_courier';

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
