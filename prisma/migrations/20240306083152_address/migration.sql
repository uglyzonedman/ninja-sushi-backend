-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `street` VARCHAR(191) NOT NULL,
    `street_number` INTEGER NOT NULL DEFAULT 0,
    `flat` INTEGER NOT NULL DEFAULT 0,
    `entrance` INTEGER NOT NULL DEFAULT 0,
    `floor` INTEGER NOT NULL DEFAULT 0,
    `accountId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `account`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
