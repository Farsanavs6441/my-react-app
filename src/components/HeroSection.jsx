import styles from './HeroSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection({ onShopNow, onExploreDeals }) {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleGradient}>{t('hero.summerSale')}</span>
          <span className={styles.titleEmoji}>🌟</span>
        </h1>
        <p className={styles.heroSubtitle}>{t('hero.saleSubtitle')}</p>
        <div className={styles.heroButtons}>
          <button className={styles.shopButton} onClick={onShopNow}>
            {t('hero.shopNow')} 🛍️
          </button>
          <button className={styles.exploreButton} onClick={onExploreDeals}>
            {t('hero.exploreDeals')}
          </button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.floatingCard}>
          <span className={styles.saleTag}>{t('hero.megaSale')}</span>
        </div>
      </div>
    </section>
  );
}