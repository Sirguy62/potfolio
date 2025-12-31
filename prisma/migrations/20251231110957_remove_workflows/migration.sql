/*
  Warnings:

  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workflow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_workflowId_fkey";

-- DropForeignKey
ALTER TABLE "workflow" DROP CONSTRAINT "workflow_ownerId_fkey";

-- DropTable
DROP TABLE "task";

-- DropTable
DROP TABLE "workflow";

-- DropEnum
DROP TYPE "Stage";
