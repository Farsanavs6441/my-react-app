import { useNavigate } from 'react-router-dom';
import styles from './Categories.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function Categories() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const categories = [
    { name: t('categories.electronics'), icon: "📱", color: "#FF6B6B", path: "electronics" },
    { name: t('categories.fashion'), icon: "👗", color: "#4ECDC4", path: "fashion" },
    { name: t('categories.homeLiving'), icon: "🏠", color: "#45B7D1", path: "home-living" },
    { name: t('categories.sports'), icon: "⚽", color: "#96CEB4", path: "sports" },
    { name: t('categories.beauty'), icon: "💄", color: "#DDA0DD", path: "beauty" },
    { name: t('categories.books'), icon: "📚", color: "#98D8C8", path: "books" },
    { name: t('categories.freshFood'), icon: "🥗", color: "#34D399", path: "fresh-food" },
    { name: t('categories.poultry'), icon: "🍗", color: "#F87171", path: "poultry" },
    { name: t('categories.healthWellness'), icon: "💊", color: "#60A5FA", path: "health-wellness" }
  ];

  return (
    <section id="categories" className={styles.categories}>
      <h2 className={styles.sectionTitle}>{t('categories.title')}</h2>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={styles.categoryCard} 
            style={{'--category-color': category.color}}
            onClick={() => navigate(`/category/${category.path}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/category/${category.path}`)}
          >
            <span className={styles.categoryIcon}>{category.icon}</span>
            <span className={styles.categoryName}>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}