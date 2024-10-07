import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function Login(email: string, password: string) {
  if (!email || !password) {
    console.log("email or password is required");
    return null;
  }

  const prisma = new PrismaClient();

  try {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      const accessToken = jwt.sign(
        { email: user?.email, name: user?.name },
        process.env.ACCESS_TOKEN_SECRET ?? "",
        { expiresIn: "1h" }
      );
      console.log(
        "PEMISAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
      );
      return {
        id: user.userid.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
        token: accessToken,
      };
    }
    console.log("email or password is wrong!");
    return null;
  } catch (err) {
    console.log("error when try to Login => ", err);
    return null;
  }
}

export async function ChUser(email: string) {
  try {
    const data = await prisma.users.findUnique({
      where: { email },
      select: {
        userid: true,
        email: true,
        name: true,
        role: true,
      },
    });
    if (!data) {
      console.log(`email doesn't exist`);
      return null;
    }
    return { ...data, accessToken: "" };
  } catch (err) {
    console.log("error when try to check user => ", err);
    return null;
  }
}
