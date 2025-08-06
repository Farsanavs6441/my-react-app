import styles from './Newsletter.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function Newsletter({ onSubscribe }) {
  const { t } = useLanguage();
  
  return (
    <section id="newsletter" className={styles.newsletter}>
      <h2 className={styles.newsletterTitle}>{t('newsletter.title')} 💌</h2>
      <p className={styles.newsletterSubtitle}>
        {t('newsletter.subtitle')}
      </p>
      <form className={styles.newsletterForm} onSubmit={onSubscribe}>
        <input 
          type="email" 
          name="email"
          placeholder={t('newsletter.emailPlaceholder')} 
          className={styles.emailInput}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          {t('newsletter.subscribe')}
        </button>
      </form>
    </section>
  );
}