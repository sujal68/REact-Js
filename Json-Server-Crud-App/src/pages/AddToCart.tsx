import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaLeaf, FaTrashAlt, FaPlus, FaMinus, FaShoppingBag, FaTruck, FaSeedling, FaShieldAlt, FaArrowLeft, FaTag } from "react-icons/fa";
import { fetchCart, updateCartItem, removeFromCart, clearCart } from "../Services/ProductService";
import type { cartItemType } from "../utils/global";
import { toast } from "react-toastify";

export default function CartPage() {
    const [cartItems, setCartItems] = useState<cartItemType[]>([]);
    const [couponCode, setCouponCode] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const deliveryCharges = 40;
    const freeDeliveryThreshold = 500;

    useEffect(() => {
        getCartItems();
    }, []);

    const getCartItems = async () => {
        const data = await fetchCart();
        setCartItems(data);
    };

    const updateQuantity = async (item: cartItemType, newQty: number) => {
        if (newQty < 1) return;
        const updated = { ...item, quantity: newQty };
        await updateCartItem(updated);
        setCartItems((prev) => prev.map((i) => (i.id === item.id ? updated : i)));
    };

    const removeItem = async (id: string) => {
        await removeFromCart(id);
        setCartItems((prev) => prev.filter((i) => i.id !== id));
        toast.success("Item removed from cart!");
    };

    const handleClearCart = async () => {
        if (!confirm("Clear entire cart?")) return;
        await clearCart(cartItems);
        setCartItems([]);
        toast.success("Cart cleared!");
    };

    const applyCoupon = () => {
        if (couponCode.toUpperCase() === "FRESH20") {
            setCouponApplied(true);
            toast.success("Coupon applied — 20% off!");
        } else {
            toast.error("Invalid coupon. Try 'FRESH20'");
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.p_price * item.quantity, 0);
    const discount = couponApplied ? Math.round(subtotal * 0.2) : 0;
    const delivery = subtotal >= freeDeliveryThreshold ? 0 : deliveryCharges;
    const total = subtotal - discount + delivery;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
                * { box-sizing: border-box; }
                @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes orbPulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.1) translate(-10px, 8px); opacity: 0.6; } }
                @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
                .animate-fade-up { animation: fadeSlideUp 0.6s ease 0.2s both; }
                .animate-fade-up-delay { animation: fadeSlideUp 0.6s ease 0.35s both; }
                .animate-slide-in { animation: slideInRight 0.6s ease 0.4s both; }
                .animate-cart-item { animation: fadeSlideUp 0.5s ease backwards; }
                .animate-cart-item:nth-child(1){animation-delay:0.05s} .animate-cart-item:nth-child(2){animation-delay:0.1s}
                .animate-cart-item:nth-child(3){animation-delay:0.15s} .animate-cart-item:nth-child(4){animation-delay:0.2s}
                .animate-cart-item:nth-child(5){animation-delay:0.25s}
                .orb-bg-1 { position:absolute; width:500px; height:500px; background:radial-gradient(circle,rgba(134,239,172,0.25) 0%,transparent 100%); border-radius:50%; top:-150px; right:-150px; animation:orbPulse 8s ease-in-out infinite; pointer-events:none; }
                .orb-bg-2 { position:absolute; width:350px; height:350px; background:radial-gradient(circle,rgba(253,224,71,0.15) 0%,transparent 100%); border-radius:50%; bottom:-100px; left:-100px; animation:orbPulse 10s ease-in-out 2s infinite reverse; pointer-events:none; }
                .noise-bg::before { content:''; position:fixed; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events:none; z-index:0; }
                .dot-grid { position:absolute; inset:0; background-image:radial-gradient(circle,rgba(22,163,74,0.06) 1px,transparent 1px); background-size:28px 28px; pointer-events:none; }
                .glass-card { background:rgba(255,255,255,0.92); backdrop-filter:blur(16px) saturate(180%); border:1px solid rgba(255,255,255,0.95); box-shadow:0 4px 20px rgba(0,0,0,0.04); transition:all 0.3s ease; }
                .cart-item { transition:all 0.3s ease; }
                .cart-item:hover { background:rgba(255,255,255,0.98); transform:translateX(4px); }
                .quantity-btn { transition:all 0.2s ease; }
                .quantity-btn:hover { background:#15803d; color:white; }
                .btn-checkout { background:linear-gradient(135deg,#15803d 0%,#16a34a 50%,#22c55e 100%); transition:all 0.35s ease; }
                .btn-checkout:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(22,163,74,0.3); }
                .coupon-input { background:rgba(255,255,255,0.95); border:1.5px solid rgba(34,197,94,0.15); transition:all 0.3s ease; }
                .coupon-input:focus { outline:none; border-color:#22c55e; box-shadow:0 0 0 3px rgba(34,197,94,0.1); }
                .shimmer-text { background:linear-gradient(120deg,#166534 0%,#15803d 20%,#4ade80 40%,#86efac 50%,#4ade80 60%,#15803d 80%,#166534 100%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shimmer 4s linear infinite; }
            `}</style>

            <div className="noise-bg min-h-screen pt-28 pb-20 overflow-hidden relative" style={{ background: "linear-gradient(145deg,#f0fdf4 0%,#fafdf7 45%,#f8fafc 100%)", fontFamily: "'DM Sans',sans-serif" }}>
                <div className="dot-grid" />
                <div className="orb-bg-1" />
                <div className="orb-bg-2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="animate-fade-up mb-8">
                        <NavLink to="/product" className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors mb-6 group">
                            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Continue Shopping</span>
                        </NavLink>
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-4">
                                    <FaShoppingBag className="text-green-500 text-xs" />
                                    <span className="text-xs font-semibold text-green-700 tracking-wide">YOUR CART</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-black text-gray-900" style={{ fontFamily: "'Playfair Display',serif" }}>
                                    {cartItems.length > 0 ? "Your " : ""}
                                    <span className="shimmer-text">{cartItems.length > 0 ? "Fresh Picks" : "Cart is Empty"}</span>
                                </h1>
                                <p className="text-gray-500 mt-2">
                                    {cartItems.length > 0 ? `${cartItems.length} item${cartItems.length > 1 ? "s" : ""} in your cart` : "Looks like you haven't added anything yet"}
                                </p>
                            </div>
                            {cartItems.length > 0 && (
                                <button onClick={handleClearCart} className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors border border-red-200 hover:border-red-400 px-4 py-2 rounded-xl">
                                    Clear Cart
                                </button>
                            )}
                        </div>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="animate-fade-up-delay text-center py-16">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-6">
                                <FaShoppingBag className="text-5xl text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is feeling light!</h2>
                            <p className="text-gray-400 mb-8">Add some products to get started</p>
                            <NavLink to="/product" className="btn-checkout inline-block px-8 py-3.5 rounded-xl text-white font-semibold">
                                Explore Products →
                            </NavLink>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="animate-cart-item cart-item glass-card rounded-2xl p-4 sm:p-5">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-50 to-emerald-50 mx-auto sm:mx-0">
                                                <img src={item.p_image} alt={item.p_name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                                    <div>
                                                        <h3 className="font-bold text-gray-800 text-lg">{item.p_name}</h3>
                                                        <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">{item.p_category}</span>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="text-xl font-black text-green-600">₹{item.p_price.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                                                        <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1.5">
                                                            <button onClick={() => updateQuantity(item, item.quantity - 1)} className="quantity-btn w-8 h-8 rounded-lg flex items-center justify-center bg-white text-gray-600 transition-all">
                                                                <FaMinus className="text-xs" />
                                                            </button>
                                                            <span className="w-8 text-center font-semibold text-gray-700">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item, item.quantity + 1)} className="quantity-btn w-8 h-8 rounded-lg flex items-center justify-center bg-white text-gray-600 transition-all">
                                                                <FaPlus className="text-xs" />
                                                            </button>
                                                        </div>
                                                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-2">
                                                            <FaTrashAlt className="text-sm" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                                                    <p className="text-sm text-gray-500">
                                                        Item Total: <span className="font-bold text-gray-800">₹{(item.p_price * item.quantity).toLocaleString()}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Free Delivery Progress */}
                                {subtotal < freeDeliveryThreshold && (
                                    <div className="glass-card rounded-2xl p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <FaTruck className="text-green-500 text-lg" />
                                            <p className="text-sm text-gray-600">
                                                Add <span className="font-bold text-green-600">₹{freeDeliveryThreshold - subtotal}</span> more for FREE delivery
                                            </p>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500" style={{ width: `${Math.min((subtotal / freeDeliveryThreshold) * 100, 100)}%` }} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Order Summary */}
                            <div className="animate-slide-in">
                                <div className="glass-card rounded-2xl p-6 sticky top-28">
                                    <h2 className="text-xl font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                                        <FaTag className="text-green-500 text-sm" /> Order Summary
                                    </h2>

                                    {/* Coupon */}
                                    <div className="mb-6">
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Coupon code"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                disabled={couponApplied}
                                                className="coupon-input flex-1 px-4 py-3 rounded-xl text-sm disabled:opacity-60"
                                            />
                                            <button onClick={applyCoupon} disabled={couponApplied} className="px-5 py-3 rounded-xl bg-green-50 text-green-600 font-semibold text-sm hover:bg-green-100 transition-colors disabled:opacity-60">
                                                Apply
                                            </button>
                                        </div>
                                        {couponApplied && (
                                            <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                                                <FaLeaf className="text-xs" /> "FRESH20" applied — 20% off!
                                            </p>
                                        )}
                                    </div>

                                    {/* Price Breakdown */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span>₹{subtotal.toLocaleString()}</span>
                                        </div>
                                        {discount > 0 && (
                                            <div className="flex justify-between text-green-600">
                                                <span>Discount (20%)</span>
                                                <span>-₹{discount.toLocaleString()}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-gray-600">
                                            <span>Delivery</span>
                                            <span>{delivery === 0 ? <span className="text-green-600">Free</span> : `₹${delivery}`}</span>
                                        </div>
                                        <div className="pt-3 border-t border-gray-100 flex justify-between">
                                            <span className="font-bold text-gray-800 text-lg">Total</span>
                                            <span className="font-black text-green-600 text-2xl">₹{total.toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-gray-400">Inclusive of all taxes</p>
                                    </div>

                                    <button className="btn-checkout w-full py-4 rounded-xl text-white font-semibold text-lg mb-4">
                                        Proceed to Checkout →
                                    </button>

                                    <div className="flex justify-center gap-6 pt-4 border-t border-gray-100">
                                        <div className="text-center">
                                            <FaShieldAlt className="text-green-500 text-lg mx-auto mb-1" />
                                            <p className="text-[10px] text-gray-400">Secure Payment</p>
                                        </div>
                                        <div className="text-center">
                                            <FaTruck className="text-green-500 text-lg mx-auto mb-1" />
                                            <p className="text-[10px] text-gray-400">Fast Delivery</p>
                                        </div>
                                        <div className="text-center">
                                            <FaSeedling className="text-green-500 text-lg mx-auto mb-1" />
                                            <p className="text-[10px] text-gray-400">100% Fresh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
