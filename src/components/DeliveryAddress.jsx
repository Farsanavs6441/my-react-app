import { useState } from 'react';
import styles from './DeliveryAddress.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function DeliveryAddress({ onAddressDataChange }) {
  const { t } = useLanguage();
  const [deliveryData, setDeliveryData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    deliveryNotes: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Full name validation
    if (!deliveryData.fullName.trim()) {
      newErrors.fullName = t('delivery.errors.fullNameRequired');
    }
    
    // Email validation
    if (!deliveryData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = t('delivery.errors.invalidEmail');
    }
    
    // Phone validation (basic check)
    if (!deliveryData.phone.match(/^\+?[\d\s-()]+$/) || deliveryData.phone.length < 10) {
      newErrors.phone = t('delivery.errors.invalidPhone');
    }
    
    // Address validation
    if (!deliveryData.address.trim()) {
      newErrors.address = t('delivery.errors.addressRequired');
    }
    
    // City validation
    if (!deliveryData.city.trim()) {
      newErrors.city = t('delivery.errors.cityRequired');
    }
    
    // State validation
    if (!deliveryData.state.trim()) {
      newErrors.state = t('delivery.errors.stateRequired');
    }
    
    // Zip code validation
    if (!deliveryData.zipCode.match(/^\d{5}(-\d{4})?$/)) {
      newErrors.zipCode = t('delivery.errors.invalidZipCode');
    }
    
    // Country validation
    if (!deliveryData.country.trim()) {
      newErrors.country = t('delivery.errors.countryRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setDeliveryData({ ...deliveryData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddressDataChange(deliveryData);
    }
  };

  return (
    <div className={styles.deliveryContainer}>
      <h2 className={styles.title}>{t('delivery.title')}</h2>
      
      <form onSubmit={handleSubmit} className={styles.deliveryForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">{t('delivery.fullName')}</label>
            <input
              type="text"
              id="fullName"
              placeholder={t('delivery.fullNamePlaceholder')}
              value={deliveryData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={errors.fullName ? styles.error : ''}
            />
            {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">{t('delivery.email')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('delivery.emailPlaceholder')}
              value={deliveryData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? styles.error : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">{t('delivery.phone')}</label>
          <input
            type="tel"
            id="phone"
            placeholder={t('delivery.phonePlaceholder')}
            value={deliveryData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={errors.phone ? styles.error : ''}
          />
          {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">{t('delivery.address')}</label>
          <input
            type="text"
            id="address"
            placeholder={t('delivery.addressPlaceholder')}
            value={deliveryData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className={errors.address ? styles.error : ''}
          />
          {errors.address && <span className={styles.errorMessage}>{errors.address}</span>}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="city">{t('delivery.city')}</label>
            <input
              type="text"
              id="city"
              placeholder={t('delivery.cityPlaceholder')}
              value={deliveryData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={errors.city ? styles.error : ''}
            />
            {errors.city && <span className={styles.errorMessage}>{errors.city}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="state">{t('delivery.state')}</label>
            <input
              type="text"
              id="state"
              placeholder={t('delivery.statePlaceholder')}
              value={deliveryData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={errors.state ? styles.error : ''}
            />
            {errors.state && <span className={styles.errorMessage}>{errors.state}</span>}
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="zipCode">{t('delivery.zipCode')}</label>
            <input
              type="text"
              id="zipCode"
              placeholder={t('delivery.zipCodePlaceholder')}
              value={deliveryData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              className={errors.zipCode ? styles.error : ''}
            />
            {errors.zipCode && <span className={styles.errorMessage}>{errors.zipCode}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="country">{t('delivery.country')}</label>
            <select
              id="country"
              value={deliveryData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className={errors.country ? styles.error : ''}
            >
              <option value="">{t('delivery.selectCountry')}</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="CN">China</option>
            </select>
            {errors.country && <span className={styles.errorMessage}>{errors.country}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="deliveryNotes">{t('delivery.notes')}</label>
          <textarea
            id="deliveryNotes"
            rows="4"
            placeholder={t('delivery.notesPlaceholder')}
            value={deliveryData.deliveryNotes}
            onChange={(e) => handleInputChange('deliveryNotes', e.target.value)}
            className={styles.textarea}
          />
        </div>
      </form>
    </div>
  );
}