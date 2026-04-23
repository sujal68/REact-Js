import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // React Router use kar rahe ho toh

// 1. Link ke liye Interface define kiya
interface NavItem {
    path: string;
    label: string;
    exact?: boolean;
}

const App: React.FC = () => {
    // 2. State types define kiye
    const [cartCount] = useState<number>(2);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // 3. Array of objects with Type
    const navLinks: NavItem[] = [
        { path: "/", label: "Home", exact: true },
        { path: "/addProduct", label: "Add Product" },
        { path: "/product", label: "Products" }
    ];

    return (
        <div className="font-sans">
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
                    
                    {/* --- Logo --- */}
                    <div className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-widest cursor-pointer hover:scale-105 transition-transform duration-300">
                        <span className="drop-shadow-md">🥝</span>
                        <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
                            FRUIREAL
                        </span>
                    </div>

                    {/* --- Desktop Links (Hidden on Mobile) --- */}
                    <div className="hidden md:flex items-center gap-x-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.exact}
                                className={({ isActive }: { isActive: boolean }) =>
                                    `px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "text-emerald-700 bg-emerald-50 shadow-sm scale-105"
                                            : "text-gray-500 hover:text-emerald-600 hover:bg-gray-50"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* --- Right Actions --- */}
                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/cart"
                            className="group relative flex items-center justify-center px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-sm hover:bg-emerald-500 transition-all duration-300 active:scale-95"
                        >
                            <span className="flex items-center gap-2">
                                <span className="hidden sm:inline">Cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 border-2 border-white text-[10px] font-bold text-white shadow-sm">
                                    {cartCount}
                                </span>
                            )}
                        </NavLink>

                        {/* Mobile Toggle Button */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* --- Mobile Sidebar Drawer --- */}
            <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                {/* Backdrop Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
                
                {/* Side Panel (Animated Slide) */}
                <div className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-500 ease-in-out p-8 flex flex-col gap-4 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <span className="font-black text-emerald-600 text-lg">FRUIREAL</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }: { isActive: boolean }) =>
                                `text-lg font-bold px-6 py-4 rounded-2xl transition-all ${
                                    isActive 
                                    ? "bg-emerald-600 text-white shadow-xl shadow-emerald-100 translate-x-2" 
                                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;