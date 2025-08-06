import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css';
import Navbar from '../components/Navbar';
import DeliveryAddress from '../components/DeliveryAddress';
import PaymentMethod from '../components/PaymentMethod';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Checkout() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [deliveryData, setDeliveryData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const handleDeliverySubmit = (data) => {
    setDeliveryData(data);
    setStep(2);
  };

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    // Here you would typically process the order
    // For now, we'll just show a success message
    alert(t('checkout.orderSuccess'));
    clearCart();
    navigate('/home');
  };

  const scrollToSection = (sectionId) => {
    // Placeholder for scroll functionality
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.checkoutPage}>
      <Navbar 
        cartCount={cartItems.length} 
        wishlistCount={0} 
        scrollToSection={scrollToSection} 
      />
      
      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutContent}>
          <div className={styles.leftColumn}>
            <div className={styles.stepIndicator}>
              <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>
                <span>1</span>
                <p>{t('checkout.deliveryStep')}</p>
              </div>
              <div className={styles.stepLine}></div>
              <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>
                <span>2</span>
                <p>{t('checkout.paymentStep')}</p>
              </div>
            </div>

            {step === 1 && (
              <DeliveryAddress onAddressDataChange={handleDeliverySubmit} />
            )}
            
            {step === 2 && (
              <>
                <div className={styles.deliverySummary}>
                  <h3>{t('checkout.deliveryDetails')}</h3>
                  <p>{deliveryData?.fullName}</p>
                  <p>{deliveryData?.address}, {deliveryData?.city}</p>
                  <p>{deliveryData?.state} {deliveryData?.zipCode}, {deliveryData?.country}</p>
                  <button onClick={() => setStep(1)} className={styles.editButton}>
                    {t('checkout.edit')}
                  </button>
                </div>
                <PaymentMethod onPaymentDataChange={handlePaymentSubmit} />
              </>
            )}
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.orderSummary}>
              <h2 className={styles.summaryTitle}>{t('checkout.orderSummary')}</h2>
              
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.itemDetails}>
                      <h4>{item.name}</h4>
                      <p>{t('checkout.quantity')}: {item.quantity}</p>
                    </div>
                    <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className={styles.summaryDetails}>
                <div className={styles.summaryRow}>
                  <span>{t('checkout.subtotal')}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>{t('checkout.shipping')}</span>
                  <span>{shipping === 0 ? t('checkout.free') : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>{t('checkout.tax')}</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>{t('checkout.total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {step === 1 && (
                <button 
                  className={styles.continueButton}
                  onClick={() => setStep(2)}
                  disabled={!deliveryData}
                >
                  {t('checkout.continueToPayment')}
                </button>
              )}
              
              {step === 2 && (
                <button 
                  className={styles.placeOrderButton}
                  onClick={() => paymentData && handlePaymentSubmit(paymentData)}
                >
                  {t('checkout.placeOrder')}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}