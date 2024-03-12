/*
  Warnings:

  - You are about to alter the column `volume` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `volume` DECIMAL(65, 30) NULL DEFAULT 0;
