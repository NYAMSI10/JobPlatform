-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('USER', 'ADMIN', 'COMPANY') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `Job` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `salaire` VARCHAR(191) NULL,
    `telework` ENUM('frequent', 'occasionally', 'no') NOT NULL DEFAULT 'no',
    `experience` VARCHAR(191) NULL DEFAULT '>6mois',
    `education` VARCHAR(191) NULL,
    `description` TEXT NOT NULL,
    `profil` TEXT NOT NULL,
    `procedure` TEXT NOT NULL,
    `userId` INTEGER NOT NULL,
    `contratId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_contratId_fkey` FOREIGN KEY (`contratId`) REFERENCES `Contrat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
