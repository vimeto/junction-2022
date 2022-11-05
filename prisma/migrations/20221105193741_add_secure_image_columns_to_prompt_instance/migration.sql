/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `PromptInstance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PromptInstance` DROP COLUMN `imageUrl`,
    ADD COLUMN `imageLocation` VARCHAR(191) NULL,
    ADD COLUMN `imageSecureExpires` DATETIME(3) NULL,
    ADD COLUMN `imageSecureURL` VARCHAR(191) NULL;
