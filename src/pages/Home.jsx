import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function Home() {
  const navigate = useNavigate();
  const { addToCart, getTotalItems } = useCart();
  const [wishlist, setWishlist] = useState([]);
  const { t } = useLanguage();

  // Navigation handlers

  const handleProductClick = (productId) => {
    alert(`Viewing product details for product #${productId}`);
    // navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    const productWithPrice = {
      ...product,
      price: parseFloat(product.price.replace('$', ''))
    };
    addToCart(productWithPrice);
    alert(`${t('alerts.addedToCart')} ${product.name}!`);
  };

  const handleWishlist = (e, productId) => {
    e.stopPropagation();
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      alert(t('alerts.removedFromWishlist'));
    } else {
      setWishlist([...wishlist, productId]);
      alert(t('alerts.addedToWishlist'));
    }
  };

  const handleShopNow = () => {
    alert('Navigating to all products page');
    // navigate('/shop');
  };

  const handleExploreDeals = () => {
    alert('Navigating to deals page');
    // navigate('/deals');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert(`${t('alerts.subscribed')} ${email}`);
      e.target.reset();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <Navbar 
        cartCount={getTotalItems()}
        wishlistCount={wishlist.length}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection 
        onShopNow={handleShopNow}
        onExploreDeals={handleExploreDeals}
      />
      
      <Categories />
      
      <FeaturedProducts 
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
        onWishlist={handleWishlist}
        wishlist={wishlist}
      />
      
      <Newsletter 
        onSubscribe={handleSubscribe}
      />

      {/* User Actions */}
      <div className={styles.userActions}>
        <button className={styles.logoutButton} onClick={() => navigate('/')}>
          {t('nav.logout')}
        </button>
      </div>
    </div>
  );
}