-- CreateTable
CREATE TABLE "tblPersonalInfo" (
    "studentId" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "studentMobile" TEXT NOT NULL,
    "parentMobile" TEXT NOT NULL,
    "dateOfGraduation" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tblPersonalInfo_pkey" PRIMARY KEY ("studentId")
);
