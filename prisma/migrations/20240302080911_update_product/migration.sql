/*
  Warnings:

  - You are about to drop the column `product_category_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `product_category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_product_category_id_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `product_category_id`,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `product_category`;
