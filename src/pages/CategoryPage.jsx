import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './CategoryPage.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  // Category data with products
  const categoryData = {
    electronics: {
      title: "Electronics",
      description: "Discover the latest gadgets and tech essentials",
      banner: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop",
      products: [
        { id: 1, name: "Premium Wireless Headphones", price: "$299.99", originalPrice: "$399.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 2, name: "Smart Watch Ultra", price: "$449.99", originalPrice: "$599.99", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.8 },
        { id: 3, name: "Wireless Earbuds Pro", price: "$199.99", originalPrice: "$249.99", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.6 },
        { id: 4, name: "4K Webcam", price: "$129.99", originalPrice: "$179.99", image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=300&h=300&fit=crop", discount: "28% OFF", rating: 4.4 },
        { id: 5, name: "Gaming Keyboard RGB", price: "$159.99", originalPrice: "$199.99", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.7 },
        { id: 6, name: "Portable SSD 1TB", price: "$99.99", originalPrice: "$149.99", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", discount: "33% OFF", rating: 4.8 },
        { id: 7, name: "Smartphone Gimbal", price: "$89.99", originalPrice: "$129.99", image: "https://images.unsplash.com/photo-1617638924550-92d9a8c6e094?w=300&h=300&fit=crop", discount: "31% OFF", rating: 4.5 },
        { id: 8, name: "USB-C Hub 7-in-1", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.3 }
      ]
    },
    fashion: {
      title: "Fashion",
      description: "Stay trendy with our latest fashion collection",
      banner: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop",
      products: [
        { id: 9, name: "Designer Sunglasses", price: "$189.99", originalPrice: "$249.99", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop", discount: "24% OFF", rating: 4.6 },
        { id: 10, name: "Leather Backpack", price: "$159.99", originalPrice: "$199.99", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.7 },
        { id: 11, name: "Classic Watch", price: "$299.99", originalPrice: "$399.99", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.8 },
        { id: 12, name: "Leather Wallet", price: "$79.99", originalPrice: "$99.99", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.5 },
        { id: 13, name: "Silk Scarf", price: "$89.99", originalPrice: "$119.99", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.4 },
        { id: 14, name: "Designer Belt", price: "$129.99", originalPrice: "$169.99", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.6 },
        { id: 15, name: "Canvas Tote Bag", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.3 },
        { id: 16, name: "Leather Boots", price: "$199.99", originalPrice: "$279.99", image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=300&h=300&fit=crop", discount: "28% OFF", rating: 4.7 }
      ]
    },
    "home-living": {
      title: "Home & Living",
      description: "Transform your space with our home essentials",
      banner: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&h=400&fit=crop",
      products: [
        { id: 17, name: "Smart LED Bulbs (4-pack)", price: "$59.99", originalPrice: "$79.99", image: "https://images.unsplash.com/photo-1565636192232-f1f0a369c72e?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 18, name: "Aromatherapy Diffuser", price: "$39.99", originalPrice: "$59.99", image: "https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?w=300&h=300&fit=crop", discount: "33% OFF", rating: 4.6 },
        { id: 19, name: "Bamboo Cutting Board Set", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.7 },
        { id: 20, name: "Ceramic Vase Set", price: "$79.99", originalPrice: "$99.99", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.4 },
        { id: 21, name: "Wall Art Canvas", price: "$89.99", originalPrice: "$119.99", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.8 },
        { id: 22, name: "Throw Pillow Set", price: "$59.99", originalPrice: "$79.99", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 23, name: "Kitchen Storage Containers", price: "$34.99", originalPrice: "$49.99", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", discount: "30% OFF", rating: 4.6 },
        { id: 24, name: "Indoor Plant Pots", price: "$44.99", originalPrice: "$59.99", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.4 }
      ]
    },
    sports: {
      title: "Sports & Fitness",
      description: "Gear up for your fitness journey",
      banner: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=400&fit=crop",
      products: [
        { id: 25, name: "Running Shoes Pro", price: "$129.99", originalPrice: "$179.99", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", discount: "28% OFF", rating: 4.4 },
        { id: 26, name: "Yoga Mat Premium", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.6 },
        { id: 27, name: "Resistance Bands Set", price: "$29.99", originalPrice: "$39.99", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 28, name: "Smart Water Bottle", price: "$39.99", originalPrice: "$59.99", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300&h=300&fit=crop", discount: "33% OFF", rating: 4.3 },
        { id: 29, name: "Gym Duffel Bag", price: "$59.99", originalPrice: "$79.99", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.7 },
        { id: 30, name: "Fitness Tracker", price: "$99.99", originalPrice: "$149.99", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop", discount: "33% OFF", rating: 4.8 },
        { id: 31, name: "Adjustable Dumbbells", price: "$199.99", originalPrice: "$279.99", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop", discount: "28% OFF", rating: 4.6 },
        { id: 32, name: "Sports Towel Set", price: "$24.99", originalPrice: "$34.99", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.4 }
      ]
    },
    beauty: {
      title: "Beauty & Personal Care",
      description: "Enhance your natural beauty with premium products",
      banner: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=400&fit=crop",
      products: [
        { id: 33, name: "Skincare Set Deluxe", price: "$89.99", originalPrice: "$119.99", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.7 },
        { id: 34, name: "Makeup Brush Set", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.6 },
        { id: 35, name: "Hair Straightener Pro", price: "$79.99", originalPrice: "$109.99", image: "https://images.unsplash.com/photo-1519823785096-e493d1bb38f0?w=300&h=300&fit=crop", discount: "27% OFF", rating: 4.5 },
        { id: 36, name: "Perfume Collection", price: "$129.99", originalPrice: "$169.99", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.8 },
        { id: 37, name: "LED Mirror", price: "$59.99", originalPrice: "$79.99", image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.4 },
        { id: 38, name: "Nail Care Kit", price: "$39.99", originalPrice: "$54.99", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop", discount: "27% OFF", rating: 4.5 },
        { id: 39, name: "Face Mask Set", price: "$29.99", originalPrice: "$39.99", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.6 },
        { id: 40, name: "Hair Dryer Professional", price: "$99.99", originalPrice: "$139.99", image: "https://images.unsplash.com/photo-1508057440249-bf022e89602f?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.7 }
      ]
    },
    books: {
      title: "Books & Stationery",
      description: "Feed your mind with our book collection",
      banner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop",
      products: [
        { id: 41, name: "Bestseller Bundle", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.8 },
        { id: 42, name: "Premium Notebook Set", price: "$29.99", originalPrice: "$39.99", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 43, name: "E-Reader Deluxe", price: "$159.99", originalPrice: "$199.99", image: "https://images.unsplash.com/photo-1587689374684-47953d3fa8e8?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.7 },
        { id: 44, name: "Art Supplies Kit", price: "$79.99", originalPrice: "$99.99", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.6 },
        { id: 45, name: "Classic Literature Set", price: "$89.99", originalPrice: "$119.99", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.9 },
        { id: 46, name: "Desk Organizer Set", price: "$39.99", originalPrice: "$54.99", image: "https://images.unsplash.com/photo-1568452329906-ea1e3c8b1f7a?w=300&h=300&fit=crop", discount: "27% OFF", rating: 4.4 },
        { id: 47, name: "Study Planner Bundle", price: "$24.99", originalPrice: "$34.99", image: "https://images.unsplash.com/photo-1506784881475-0e408bbca849?w=300&h=300&fit=crop", discount: "29% OFF", rating: 4.5 },
        { id: 48, name: "Fountain Pen Set", price: "$59.99", originalPrice: "$79.99", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.7 }
      ]
    },
    "fresh-food": {
      title: "Fresh Food",
      description: "Farm-fresh produce delivered to your doorstep",
      banner: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=400&fit=crop",
      products: [
        { id: 49, name: "Organic Vegetable Box", price: "$29.99", originalPrice: "$39.99", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.8 },
        { id: 50, name: "Fresh Fruit Basket", price: "$34.99", originalPrice: "$44.99", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop", discount: "22% OFF", rating: 4.7 },
        { id: 51, name: "Premium Avocados (6 pack)", price: "$12.99", originalPrice: "$16.99", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop", discount: "24% OFF", rating: 4.6 },
        { id: 52, name: "Organic Berries Mix", price: "$19.99", originalPrice: "$24.99", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop", discount: "20% OFF", rating: 4.9 },
        { id: 53, name: "Farm Fresh Eggs (24)", price: "$14.99", originalPrice: "$19.99", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 54, name: "Organic Salad Mix", price: "$9.99", originalPrice: "$12.99", image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.7 },
        { id: 55, name: "Fresh Herbs Bundle", price: "$16.99", originalPrice: "$21.99", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.6 },
        { id: 56, name: "Seasonal Citrus Box", price: "$24.99", originalPrice: "$32.99", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop", discount: "24% OFF", rating: 4.8 }
      ]
    },
    poultry: {
      title: "Poultry",
      description: "Fresh, premium quality poultry and meat products",
      banner: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=1200&h=400&fit=crop",
      products: [
        { id: 57, name: "Organic Whole Chicken", price: "$18.99", originalPrice: "$24.99", image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300&h=300&fit=crop", discount: "24% OFF", rating: 4.7 },
        { id: 58, name: "Free-Range Chicken Breast", price: "$14.99", originalPrice: "$19.99", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.8 },
        { id: 59, name: "Premium Turkey Breast", price: "$22.99", originalPrice: "$29.99", image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.6 },
        { id: 60, name: "Duck Breast (2 pack)", price: "$34.99", originalPrice: "$44.99", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&h=300&fit=crop", discount: "22% OFF", rating: 4.9 },
        { id: 61, name: "Chicken Wings (2kg)", price: "$16.99", originalPrice: "$21.99", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.5 },
        { id: 62, name: "Ground Turkey (1kg)", price: "$12.99", originalPrice: "$16.99", image: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=300&h=300&fit=crop", discount: "24% OFF", rating: 4.7 },
        { id: 63, name: "Chicken Thighs (6 pack)", price: "$13.99", originalPrice: "$17.99", image: "https://images.unsplash.com/photo-1587593855708-0180e1d2a26d?w=300&h=300&fit=crop", discount: "22% OFF", rating: 4.6 },
        { id: 64, name: "Quail (4 pack)", price: "$28.99", originalPrice: "$38.99", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=300&fit=crop", discount: "26% OFF", rating: 4.8 }
      ]
    },
    "health-wellness": {
      title: "Health & Wellness",
      description: "Your complete health and wellness destination",
      banner: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200&h=400&fit=crop",
      products: [
        { id: 65, name: "Multivitamin Complex", price: "$24.99", originalPrice: "$32.99", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", discount: "24% OFF", rating: 4.8 },
        { id: 66, name: "Organic Protein Powder", price: "$39.99", originalPrice: "$54.99", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop", discount: "27% OFF", rating: 4.7 },
        { id: 67, name: "Essential Oils Set", price: "$49.99", originalPrice: "$64.99", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop", discount: "23% OFF", rating: 4.6 },
        { id: 68, name: "Digital Thermometer", price: "$14.99", originalPrice: "$19.99", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.5 },
        { id: 69, name: "First Aid Kit Complete", price: "$34.99", originalPrice: "$44.99", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop", discount: "22% OFF", rating: 4.8 },
        { id: 70, name: "Herbal Tea Collection", price: "$29.99", originalPrice: "$39.99", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.7 },
        { id: 71, name: "Blood Pressure Monitor", price: "$44.99", originalPrice: "$59.99", image: "https://images.unsplash.com/photo-1615486511262-c7b5c7f42b16?w=300&h=300&fit=crop", discount: "25% OFF", rating: 4.6 },
        { id: 72, name: "Immunity Booster Pack", price: "$19.99", originalPrice: "$26.99", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop", discount: "26% OFF", rating: 4.9 }
      ]
    }
  };

  const currentCategory = categoryData[category] || categoryData.electronics;
  
  // Get translated category name and description
  const categoryKey = category.replace('-', '');
  const translatedTitle = t(`categories.${categoryKey === 'homeliving' ? 'homeLiving' : categoryKey === 'freshfood' ? 'freshFood' : categoryKey === 'healthwellness' ? 'healthWellness' : categoryKey}`);
  const translatedDescription = t(`categoryDescriptions.${categoryKey === 'homeliving' ? 'homeLiving' : categoryKey === 'freshfood' ? 'freshFood' : categoryKey === 'healthwellness' ? 'healthWellness' : categoryKey}`);

  const handleAddToCart = (product) => {
    const productWithPrice = {
      ...product,
      price: parseFloat(product.price.replace('$', ''))
    };
    addToCart(productWithPrice);
    alert(`${t('alerts.addedToCart')} ${product.name}!`);
  };

  const handleProductClick = (productId) => {
    alert(`Viewing product details for product #${productId}`);
  };

  const filteredProducts = currentCategory.products.filter(product => {
    if (priceRange === 'under50') return parseFloat(product.price.slice(1)) < 50;
    if (priceRange === '50-100') return parseFloat(product.price.slice(1)) >= 50 && parseFloat(product.price.slice(1)) <= 100;
    if (priceRange === '100-200') return parseFloat(product.price.slice(1)) >= 100 && parseFloat(product.price.slice(1)) <= 200;
    if (priceRange === 'over200') return parseFloat(product.price.slice(1)) > 200;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    if (sortBy === 'price-high') return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <button onClick={() => navigate('/home')} className={styles.backButton}>
          {t('nav.backToHome')}
        </button>
        <h1 className={styles.logo}>FlexMart 🛍️</h1>
      </header>

      {/* Category Banner */}
      <section className={styles.banner}>
        <img src={currentCategory.banner} alt={currentCategory.title} className={styles.bannerImage} />
        <div className={styles.bannerContent}>
          <h1 className={styles.categoryTitle}>{translatedTitle}</h1>
          <p className={styles.categoryDescription}>{translatedDescription}</p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className={styles.filters}>
        <div className={styles.filterGroup}>
          <label>{t('products.sortBy')}</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.select}>
            <option value="featured">{t('products.featured')}</option>
            <option value="price-low">{t('products.priceLowHigh')}</option>
            <option value="price-high">{t('products.priceHighLow')}</option>
            <option value="rating">{t('products.highestRated')}</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>{t('products.priceRange')}</label>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className={styles.select}>
            <option value="all">{t('products.allPrices')}</option>
            <option value="under50">{t('products.under50')}</option>
            <option value="50-100">{t('products.range50to100')}</option>
            <option value="100-200">{t('products.range100to200')}</option>
            <option value="over200">{t('products.over200')}</option>
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>
          {sortedProducts.length} {t('products.productsFound')}
        </h2>
        <div className={styles.productGrid}>
          {sortedProducts.map(product => (
            <div 
              key={product.id} 
              className={styles.productCard}
              onClick={() => handleProductClick(product.id)}
            >
              <div className={styles.productImageWrapper}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <span className={styles.discountBadge}>{product.discount}</span>
                <button className={styles.wishlistButton} onClick={(e) => e.stopPropagation()}>
                  🤍
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  {t('products.addToCart')} 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}