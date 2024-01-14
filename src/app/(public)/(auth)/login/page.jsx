import { handleGithubLogin } from "@/libs/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
