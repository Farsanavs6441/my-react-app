import styles from './FeaturedProducts.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function FeaturedProducts({ onProductClick, onAddToCart, onWishlist, wishlist }) {
  const { t } = useLanguage();
  const products = [
    {
      id: 1,
      nameKey: "premiumWirelessHeadphones",
      name: t('productNames.premiumWirelessHeadphones'),
      price: "$299.99",
      originalPrice: "$399.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      discount: "25% OFF",
      rating: 4.5,
      category: "electronics"
    },
    {
      id: 2,
      nameKey: "smartWatchUltra",
      name: t('productNames.smartWatchUltra'),
      price: "$449.99",
      originalPrice: "$599.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      discount: "25% OFF",
      rating: 4.8,
      category: "electronics"
    },
    {
      id: 3,
      nameKey: "designerSunglasses",
      name: t('productNames.designerSunglasses'),
      price: "$189.99",
      originalPrice: "$249.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      discount: "24% OFF",
      rating: 4.6,
      category: "fashion"
    },
    {
      id: 4,
      nameKey: "leatherBackpack",
      name: t('productNames.leatherBackpack'),
      price: "$159.99",
      originalPrice: "$199.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      discount: "20% OFF",
      rating: 4.7,
      category: "fashion"
    },
    {
      id: 5,
      nameKey: "vintageCamera",
      name: t('productNames.vintageCamera'),
      price: "$899.99",
      originalPrice: "$1299.99",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
      discount: "31% OFF",
      rating: 4.9,
      category: "electronics"
    },
    {
      id: 6,
      nameKey: "runningShoesPro",
      name: t('productNames.runningShoesPro'),
      price: "$129.99",
      originalPrice: "$179.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      discount: "28% OFF",
      rating: 4.4,
      category: "sports"
    }
  ];

  return (
    <section id="products" className={styles.products}>
      <h2 className={styles.sectionTitle}>
        <span>{t('products.featuredProducts')}</span>
        <span className={styles.fireEmoji}>🔥</span>
      </h2>
      <div className={styles.productGrid}>
        {products.map(product => (
          <div 
            key={product.id} 
            className={styles.productCard}
            onClick={() => onProductClick(product.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onProductClick(product.id)}
          >
            <div className={styles.productImageWrapper}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <span className={styles.discountBadge}>{product.discount}</span>
              <button 
                className={`${styles.wishlistButton} ${wishlist.includes(product.id) ? styles.active : ''}`}
                onClick={(e) => onWishlist(e, product.id)}
                aria-label="Add to wishlist"
              >
                {wishlist.includes(product.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.rating}>
                {'⭐'.repeat(Math.floor(product.rating))} {product.rating}
              </div>
              <div className={styles.priceWrapper}>
                <span className={styles.price}>{product.price}</span>
                <span className={styles.originalPrice}>{product.originalPrice}</span>
              </div>
              <button 
                className={styles.addToCartButton}
                onClick={(e) => onAddToCart(e, product)}
              >
                {t('products.addToCart')} 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}