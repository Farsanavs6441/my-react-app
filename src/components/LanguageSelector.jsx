import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <button 
        className={styles.selectorButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className={styles.flag}>{currentLanguage?.flag}</span>
        <span className={styles.langCode}>{currentLanguage?.code.toUpperCase()}</span>
        <span className={styles.arrow}>▼</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {availableLanguages.map(lang => (
            <button
              key={lang.code}
              className={`${styles.dropdownItem} ${lang.code === language ? styles.active : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.langName}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}