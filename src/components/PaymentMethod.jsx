import { useState } from 'react';
import styles from './PaymentMethod.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function PaymentMethod({ onPaymentDataChange }) {
  const { t } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});

  const validateCard = () => {
    const newErrors = {};
    
    // Card number validation (simple check for 16 digits)
    if (!cardData.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      newErrors.cardNumber = t('payment.errors.invalidCardNumber');
    }
    
    // Card holder validation
    if (!cardData.cardHolder.trim()) {
      newErrors.cardHolder = t('payment.errors.cardHolderRequired');
    }
    
    // Expiry date validation (MM/YY format)
    if (!cardData.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expiryDate = t('payment.errors.invalidExpiryDate');
    }
    
    // CVV validation (3 or 4 digits)
    if (!cardData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = t('payment.errors.invalidCvv');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    setCardData({ ...cardData, cardNumber: formattedValue });
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\//g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setCardData({ ...cardData, expiryDate: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'card' && validateCard()) {
      onPaymentDataChange({ method: paymentMethod, ...cardData });
    } else if (paymentMethod !== 'card') {
      onPaymentDataChange({ method: paymentMethod });
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.title}>{t('payment.title')}</h2>
      
      <div className={styles.paymentMethods}>
        <label className={styles.methodOption}>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>{t('payment.methods.creditCard')}</span>
        </label>
        
        <label className={styles.methodOption}>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>{t('payment.methods.paypal')}</span>
        </label>
        
        <label className={styles.methodOption}>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>{t('payment.methods.cashOnDelivery')}</span>
        </label>
      </div>

      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">{t('payment.cardNumber')}</label>
            <input
              type="text"
              id="cardNumber"
              maxLength="19"
              placeholder="1234 5678 9012 3456"
              value={cardData.cardNumber}
              onChange={handleCardNumberChange}
              className={errors.cardNumber ? styles.error : ''}
            />
            {errors.cardNumber && <span className={styles.errorMessage}>{errors.cardNumber}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cardHolder">{t('payment.cardHolder')}</label>
            <input
              type="text"
              id="cardHolder"
              placeholder={t('payment.cardHolderPlaceholder')}
              value={cardData.cardHolder}
              onChange={(e) => setCardData({ ...cardData, cardHolder: e.target.value })}
              className={errors.cardHolder ? styles.error : ''}
            />
            {errors.cardHolder && <span className={styles.errorMessage}>{errors.cardHolder}</span>}
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="expiryDate">{t('payment.expiryDate')}</label>
              <input
                type="text"
                id="expiryDate"
                maxLength="5"
                placeholder="MM/YY"
                value={cardData.expiryDate}
                onChange={handleExpiryDateChange}
                className={errors.expiryDate ? styles.error : ''}
              />
              {errors.expiryDate && <span className={styles.errorMessage}>{errors.expiryDate}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cvv">{t('payment.cvv')}</label>
              <input
                type="text"
                id="cvv"
                maxLength="4"
                placeholder="123"
                value={cardData.cvv}
                onChange={(e) => setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '') })}
                className={errors.cvv ? styles.error : ''}
              />
              {errors.cvv && <span className={styles.errorMessage}>{errors.cvv}</span>}
            </div>
          </div>
        </form>
      )}

      {paymentMethod === 'paypal' && (
        <div className={styles.paypalInfo}>
          <p>{t('payment.paypalInfo')}</p>
        </div>
      )}

      {paymentMethod === 'cod' && (
        <div className={styles.codInfo}>
          <p>{t('payment.codInfo')}</p>
        </div>
      )}
    </div>
  );
}