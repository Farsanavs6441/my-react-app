import styles from './Navbar.module.css';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ cartCount, wishlistCount, scrollToSection }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleCartClick = () => {
    navigate('/checkout');
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h2 className={styles.logo}>FlexMart 🛍️</h2>
        <div className={styles.navLinks}>
          <button onClick={() => scrollToSection('hero')} className={styles.navLink}>
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('categories')} className={styles.navLink}>
            {t('nav.categories')}
          </button>
          <button onClick={() => scrollToSection('products')} className={styles.navLink}>
            {t('nav.products')}
          </button>
          <button onClick={() => scrollToSection('newsletter')} className={styles.navLink}>
            {t('nav.newsletter')}
          </button>
        </div>
        <div className={styles.navActions}>
          <button className={styles.cartButton} onClick={handleCartClick}>
            🛒 {t('nav.cart')} ({cartCount})
          </button>
          <button className={styles.wishlistNavButton}>
            ❤️ ({wishlistCount})
          </button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
}