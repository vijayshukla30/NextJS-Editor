"use client";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { login } from "@/libs/action";
import Link from "next/link";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button>Login with Credentials</button>
      {state?.error}
      <Link href="/register">
        Do not have an account? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
