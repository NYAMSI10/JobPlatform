-- AlterTable
ALTER TABLE `Job` ADD COLUMN `status` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `image` VARCHAR(191) NULL;
