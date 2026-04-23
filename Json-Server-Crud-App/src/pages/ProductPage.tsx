import { useState } from "react";
import { NavLink } from "react-router";
import { FaLeaf, FaSearch, FaFilter, FaStar, FaHeart, FaRegHeart, FaTruck, FaSeedling, FaShieldAlt } from "react-icons/fa";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [wishlist, setWishlist] = useState([]);

    // Sample product data
    const products = [
        {
            id: 1,
            name: "Premium Alphonso Mango",
            category: "mango",
            price: 450,
            originalPrice: 599,
            rating: 4.9,
            reviews: 128,
            image: "https://images.pexels.com/photos/4418674/pexels-photo-4418674.jpeg",
            badge: "Bestseller",
            organic: true,
            inStock: true,
            origin: "Ratnagiri, Maharashtra",
            delivery: "Free delivery"
        },
        {
            id: 2,
            name: "Himachal Apples",
            category: "apple",
            price: 280,
            originalPrice: 350,
            rating: 4.8,
            reviews: 94,
            image: "https://images.pexels.com/photos/18510468/pexels-photo-18510468.jpeg",
            badge: "Fresh Stock",
            organic: true,
            inStock: true,
            origin: "Shimla, Himachal Pradesh",
            delivery: "Free delivery"
        },
        {
            id: 4,
            name: "Green Grapes",
            category: "grapes",
            price: 180,
            originalPrice: 250,
            rating: 4.6,
            reviews: 52,
            image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop",
            badge: "Seedless",
            organic: false,
            inStock: true,
            origin: "Nashik, Maharashtra",
            delivery: "Free delivery"
        },
        {
            id: 5,
            name: "Fresh Strawberries",
            category: "strawberry",
            price: 350,
            originalPrice: 450,
            rating: 4.9,
            reviews: 203,
            image: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=400&h=400&fit=crop",
            badge: "Limited Stock",
            organic: true,
            inStock: true,
            origin: "Mahabaleshwar, Maharashtra",
            delivery: "Free delivery"
        },
        {
            id: 6,
            name: "Organic Bananas",
            category: "other",
            price: 120,
            originalPrice: 160,
            rating: 4.7,
            reviews: 45,
            image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop",
            badge: "Organic",
            organic: true,
            inStock: true,
            origin: "Kerala",
            delivery: "Free delivery"
        },
        {
            id: 6,
            name: "Organic Orenge Cat",
            category: "Orange",
            price: 120,
            originalPrice: 160,
            rating: 4.7,
            reviews: 45,
            image: "https://images.pexels.com/photos/33626386/pexels-photo-33626386.jpeg",
            badge: "Organic",
            organic: true,
            inStock: true,
            origin: "Switzerland",
            delivery: "Free delivery"
        },
        {
            id: 6,
            name: "Organic Bananas",
            category: "other",
            price: 120,
            originalPrice: 160,
            rating: 4.7,
            reviews: 45,
            image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop",
            badge: "Organic",
            organic: true,
            inStock: true,
            origin: "Kerala",
            delivery: "Free delivery"
        },
        {
            id: 7,
            name: "Royal Gala Apples",
            category: "apple",
            price: 380,
            originalPrice: 480,
            rating: 4.8,
            reviews: 67,
            image: "https://images.pexels.com/photos/37005122/pexels-photo-37005122.jpeg",
            badge: "Imported",
            organic: false,
            inStock: true,
            origin: "Washington, USA",
            delivery: "Premium delivery"
        }
    ];

    // Filter and sort products
    const filteredProducts = products
        .filter(product => {
            if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
            if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
            return true;
        })
        .sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return 0; // featured
        });

    const toggleWishlist = (productId) => {
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

                    * { box-sizing: border-box; }

                    @keyframes fadeSlideUp {
                        from { opacity: 0; transform: translateY(32px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes orbPulse {
                        0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.4; }
                        50% { transform: scale(1.1) translate(-10px, 8px); opacity: 0.6; }
                    }

                    @keyframes cardHover {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-8px); }
                    }

                    @keyframes shimmer {
                        0% { background-position: -200% center; }
                        100% { background-position: 200% center; }
                    }

                    .animate-fade-up { animation: fadeSlideUp 0.6s ease 0.2s both; }
                    .animate-fade-up-delay { animation: fadeSlideUp 0.6s ease 0.35s both; }
                    .animate-card { animation: fadeSlideUp 0.5s ease backwards; }
                    .animate-card:nth-child(1) { animation-delay: 0.1s; }
                    .animate-card:nth-child(2) { animation-delay: 0.15s; }
                    .animate-card:nth-child(3) { animation-delay: 0.2s; }
                    .animate-card:nth-child(4) { animation-delay: 0.25s; }
                    .animate-card:nth-child(5) { animation-delay: 0.3s; }
                    .animate-card:nth-child(6) { animation-delay: 0.35s; }
                    .animate-card:nth-child(7) { animation-delay: 0.4s; }
                    .animate-card:nth-child(8) { animation-delay: 0.45s; }

                    .orb-bg-1 {
                        position: absolute;
                        width: 500px;
                        height: 500px;
                        background: radial-gradient(circle, rgba(134,239,172,0.25) 0%, rgba(187,247,208,0.1) 60%, transparent 100%);
                        border-radius: 50%;
                        top: -150px;
                        right: -150px;
                        animation: orbPulse 8s ease-in-out infinite;
                        pointer-events: none;
                    }

                    .orb-bg-2 {
                        position: absolute;
                        width: 350px;
                        height: 350px;
                        background: radial-gradient(circle, rgba(253,224,71,0.15) 0%, rgba(254,240,138,0.05) 60%, transparent 100%);
                        border-radius: 50%;
                        bottom: -100px;
                        left: -100px;
                        animation: orbPulse 10s ease-in-out 2s infinite reverse;
                        pointer-events: none;
                    }

                    .noise-bg::before {
                        content: '';
                        position: fixed;
                        inset: 0;
                        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
                        pointer-events: none;
                        z-index: 0;
                    }

                    .glass-card {
                        background: rgba(255,255,255,0.92);
                        backdrop-filter: blur(16px) saturate(180%);
                        border: 1px solid rgba(255,255,255,0.95);
                        box-shadow: 0 4px 20px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02);
                        transition: all 0.4s cubic-bezier(0.34, 1.1, 0.64, 1);
                    }

                    .glass-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(22,163,74,0.1), 0 4px 12px rgba(0,0,0,0.05);
                        border-color: rgba(134,239,172,0.4);
                    }

                    .product-badge {
                        background: rgba(255,255,255,0.95);
                        backdrop-filter: blur(8px);
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }

                    .price-tag {
                        background: linear-gradient(135deg, #15803d 0%, #22c55e 100%);
                    }

                    .btn-cart {
                        background: linear-gradient(135deg, #15803d 0%, #16a34a 100%);
                        transition: all 0.3s ease;
                    }

                    .btn-cart:hover {
                        transform: scale(1.02);
                        box-shadow: 0 4px 12px rgba(22,163,74,0.3);
                    }

                    .search-input {
                        background: rgba(255,255,255,0.95);
                        border: 1.5px solid rgba(34,197,94,0.15);
                        transition: all 0.3s ease;
                    }

                    .search-input:focus {
                        outline: none;
                        border-color: #22c55e;
                        box-shadow: 0 0 0 3px rgba(34,197,94,0.1);
                    }

                    .filter-btn {
                        transition: all 0.3s ease;
                    }

                    .filter-btn.active {
                        background: #15803d;
                        color: white;
                        border-color: #15803d;
                    }

                    .dot-grid {
                        position: absolute;
                        inset: 0;
                        background-image: radial-gradient(circle, rgba(22,163,74,0.06) 1px, transparent 1px);
                        background-size: 28px 28px;
                        pointer-events: none;
                    }

                    .shimmer-text {
                        background: linear-gradient(120deg, #166534 0%, #15803d 20%, #4ade80 40%, #86efac 50%, #4ade80 60%, #15803d 80%, #166534 100%);
                        background-size: 200% auto;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        animation: shimmer 4s linear infinite;
                    }
                `}
            </style>

            <div
                className="noise-bg min-h-screen font-sans pt-28 pb-20 overflow-hidden relative"
                style={{ background: "linear-gradient(145deg, #f0fdf4 0%, #fafdf7 45%, #f8fafc 100%)", fontFamily: "'DM Sans', sans-serif" }}
            >
                <div className="dot-grid" />
                <div className="orb-bg-1" />
                <div className="orb-bg-2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="animate-fade-up mb-10">
                        <NavLink
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors mb-6 group"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="text-sm font-medium">Back to Home</span>
                        </NavLink>

                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-5">
                                <FaLeaf className="text-green-500 text-xs" />
                                <span className="text-xs font-semibold text-green-700 tracking-wide">OUR COLLECTION</span>
                            </div>
                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Fresh <span className="shimmer-text">Fruits</span>
                            </h1>
                            <p className="text-gray-500 text-base max-w-2xl mx-auto">
                                Handpicked organic fruits delivered fresh from farms to your doorstep
                            </p>
                        </div>
                    </div>

                    {/* Filters & Search */}
                    <div className="animate-fade-up-delay mb-10">
                        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
                            {/* Search Bar */}
                            <div className="relative w-full lg:w-96">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Search fruits..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center">
                                <div className="flex gap-2 bg-white/50 p-1.5 rounded-2xl border border-green-100">
                                    {[
                                        { id: "all", label: "All", icon: "🍎" },
                                        { id: "mango", label: "Mango", icon: "🥭" },
                                        { id: "apple", label: "Apple", icon: "🍎" },
                                        { id: "orange", label: "Orange", icon: "🍊" },
                                        { id: "grapes", label: "Grapes", icon: "🍇" },
                                        { id: "strawberry", label: "Strawberry", icon: "🍓" },
                                        { id: "other", label: "Other", icon: "🍍" }
                                    ].map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat.id
                                                ? "active bg-green-600 text-white shadow-md"
                                                : "bg-transparent text-gray-600 hover:bg-green-50"
                                                }`}
                                        >
                                            <span className="mr-1">{cat.icon}</span>
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-white/90 border border-green-200 rounded-2xl px-5 py-3 pr-10 text-gray-700 text-sm font-medium focus:outline-none focus:border-green-400 cursor-pointer"
                                    >
                                        <option value="featured">✨ Featured</option>
                                        <option value="price-low">💰 Price: Low to High</option>
                                        <option value="price-high">💰 Price: High to Low</option>
                                        <option value="rating">⭐ Top Rated</option>
                                    </select>
                                    <FaFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6 text-center lg:text-left">
                        <p className="text-sm text-gray-500">
                            Showing <span className="font-semibold text-gray-700">{filteredProducts.length}</span> of{" "}
                            <span className="font-semibold text-gray-700">{products.length}</span> products
                        </p>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🍃</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="animate-card glass-card rounded-2xl overflow-hidden cursor-pointer group"
                                >
                                    {/* Image Section */}
                                    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Badge */}
                                        <div className="absolute top-3 left-3 product-badge rounded-full px-3 py-1 text-xs font-bold text-green-700">
                                            {product.badge}
                                        </div>
                                        {/* Organic Tag */}
                                        {product.organic && (
                                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5">
                                                <FaSeedling className="text-green-500 text-xs" />
                                            </div>
                                        )}
                                        {/* Wishlist Button */}
                                        <button
                                            onClick={() => toggleWishlist(product.id)}
                                            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition-all"
                                        >
                                            {wishlist.includes(product.id) ? (
                                                <FaHeart className="text-red-500 text-sm" />
                                            ) : (
                                                <FaRegHeart className="text-gray-500 text-sm" />
                                            )}
                                        </button>
                                        {/* Out of Stock Overlay */}
                                        {!product.inStock && (
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-gray-800">
                                                    Out of Stock
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-5">
                                        <div className="flex items-center gap-1 mb-2">
                                            <div className="flex text-yellow-400 text-xs">
                                                {"★".repeat(Math.floor(product.rating))}
                                                {product.rating % 1 !== 0 && "½"}
                                            </div>
                                            <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                                        </div>

                                        <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-1 group-hover:text-green-600 transition-colors">
                                            {product.name}
                                        </h3>

                                        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                                            <span>📍</span> {product.origin}
                                        </p>

                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-green-600">
                                                <FaTruck className="text-green-500" />
                                                <span>{product.delivery}</span>
                                            </div>
                                        </div>

                                        <button
                                            disabled={!product.inStock}
                                            className={`btn-cart w-full py-3 rounded-xl text-white font-semibold text-sm transition-all ${!product.inStock ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                        >
                                            {product.inStock ? "Add to Cart →" : "Notify Me"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Trust Section */}
                    <div className="mt-20 pt-8 border-t border-green-100">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            {[
                                { icon: <FaTruck className="text-2xl text-green-500 mx-auto mb-2" />, title: "Free Delivery", desc: "On orders above ₹499" },
                                { icon: <FaSeedling className="text-2xl text-green-500 mx-auto mb-2" />, title: "100% Organic", desc: "Certified farm fresh" },
                                { icon: <FaShieldAlt className="text-2xl text-green-500 mx-auto mb-2" />, title: "Quality Guarantee", desc: "30-day return policy" }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card rounded-2xl p-5">
                                    {item.icon}
                                    <p className="font-bold text-gray-800">{item.title}</p>
                                    <p className="text-xs text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}