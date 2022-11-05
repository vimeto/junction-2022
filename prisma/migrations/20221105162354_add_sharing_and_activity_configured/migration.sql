-- AlterTable
ALTER TABLE `User` ADD COLUMN `activityConfigured` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `sharing` BOOLEAN NOT NULL DEFAULT false;
