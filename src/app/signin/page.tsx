"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import "./login.css";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session || session !== null) router.push("/");
  }, [router, session]);

  const handleForm = async (e: any) => {
    try {
      e.preventDefault();
      const hook = await signIn("auth-session", {
        ...input,
        redirect: false,
      });
      if (!hook?.ok || hook?.error) {
        return null;
      }
      setInput({ email: "", password: "" });
      router.push("/");
    } catch (err) {
      console.log("error when hook to auth => ", err);
      return null;
    }
  };

  return (
    <main className="main">
      <div className="container-login">
        <div className="login-image">
          <Image
            src="/rubicamp.png"
            alt="Not Source"
            layout="responsive"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="container-form">
          <h1>Point Of Sales</h1>
          <div className="form-part">
            <h2>Welcome Back!</h2>
            <form onSubmit={(e) => handleForm(e)}>
              <input
                className="email"
                placeholder="Enter Email Adress..."
                type="text"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <input
                className="password"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <div className="checkbox">
                <input placeholder="Remember Me" type="checkbox" />
                <p>Remember Me</p>
              </div>
              <div className="btn">
                <button
                  className="btn-login"
                  onClick={(e) => handleForm(e)}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <button className="btn-register">Forgot Password?</button>
        </div>
      </div>
    </main>
  );
}
