import LoginForm from './LoginForm';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.subtitle}>Sign in to access the Constitutional Law Blog dashboard.</p>
        <LoginForm />
      </div>
    </div>
  );
}
