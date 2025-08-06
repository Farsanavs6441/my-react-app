import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <input className={styles.input} type="email" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="Password" />
      <button className={styles.button} onClick={() => navigate('/home')}>Login</button>
      <p onClick={() => navigate('/signup')} className={styles.link}>
        Don't have an account? Sign up
      </p>
    </div>
  );
}
