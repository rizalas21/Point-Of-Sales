-- CreateTable
CREATE TABLE "users" (
    "userid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "units" (
    "unit" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "note" TEXT,

    CONSTRAINT "units_pkey" PRIMARY KEY ("unit")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
