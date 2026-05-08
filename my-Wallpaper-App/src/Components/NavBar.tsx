export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold">
                    V
                </div>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/90">
                    Vistara
                </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
                {["Explore", "Collections", "Photographers", "Premium"].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="hover:text-white transition-colors duration-200"
                    >
                        {item}
                    </a>
                ))}
            </div>
            <div className="flex items-center gap-3">
                <button className="text-sm text-white/50 hover:text-white transition-colors">
                    Sign in
                </button>
                <button className="text-sm px-4 py-1.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
                    Get started
                </button>
            </div>
        </nav>
    );
}