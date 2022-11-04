-- CreateTable
CREATE TABLE `Prompt` (
    `id` VARCHAR(191) NOT NULL,
    `activityLevel` INTEGER NOT NULL,
    `rarityLevel` INTEGER NOT NULL,
    `feedbackType` VARCHAR(191) NOT NULL,
    `translations` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PromptInstance` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `completed` BOOLEAN NOT NULL,
    `inputValue` VARCHAR(191) NULL,
    `enumValue` INTEGER NULL,
    `imageUrl` VARCHAR(191) NULL,
    `shared` BOOLEAN NOT NULL,
    `promptId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PromptInstance` ADD CONSTRAINT `PromptInstance_promptId_fkey` FOREIGN KEY (`promptId`) REFERENCES `Prompt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PromptInstance` ADD CONSTRAINT `PromptInstance_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
