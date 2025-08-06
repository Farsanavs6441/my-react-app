import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <input className={styles.input} type="text" placeholder="Name" />
      <input className={styles.input} type="email" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="Password" />
      <button className={styles.button} onClick={() => navigate('/home')}>Create Account</button>
      <p onClick={() => navigate('/')} className={styles.link}>
        Already have an account? Login
      </p>
    </div>
  );
}
