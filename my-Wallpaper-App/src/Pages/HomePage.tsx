import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '../Components/NavBar';

interface WallPaperHit {
    id: number;
    largeImageURL: string;
    tags: string;
    userImageURL: string;
    user: string;
    views: number;
    downloads: number;
    likes: number;
}

export default function HomePage() {
    const [allHits, setAllHits] = useState<WallPaperHit[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [inputVal, setInputVal] = useState<string>("");

    useEffect(() => {
        fetchAllWallpaper("nature");
    }, []);

    const fetchAllWallpaper = async (query: string) => {
        const wallPaperAPI = `https://pixabay.com/api/?key=55640430-9a37a6661afc6a98888c358fb&q=${query}&per_page=20`;
        setLoading(true);
        try {
            const res = await axios.get(wallPaperAPI);
            if (res.status === 200) {
                setAllHits(res.data.hits);
            }
        } catch (e) {
            console.log("Something went wrong", e);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setSearch(inputVal);
        fetchAllWallpaper(inputVal || "nature");
    };

    const categories = [
        { label: "Architecture", count: "2.4k photos" },
        { label: "Nature", count: "5.1k photos" },
        { label: "Urban", count: "3.8k photos" },
        { label: "Abstract", count: "1.9k photos" },
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-white font-sans">
            <NavBar />

            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
                <div
                    style={{
                        position: "absolute",
                        inset: "-10px",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridTemplateRows: "repeat(3, 1fr)",
                        gap: "4px",
                        opacity: 0.35,
                    }}
                >
                    {[
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70",
                        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=70",
                        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=70",
                        "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?w=600&q=70",
                        "https://images.pexels.com/photos/15999640/pexels-photo-15999640.jpeg",
                        "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&q=70",
                        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&q=70",
                        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=70",
                        "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=600&q=70",
                        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&q=70",
                        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=70",
                        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=70",
                    ].map((src, i) => (
                        <div key={i} style={{ overflow: "hidden", width: "100%", height: "100%" }}>
                            <img
                                src={src}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-[#0A0A0B]/50 via-[#0A0A0B]/65 to-[#0A0A0B]" />

                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-violet-400 mb-6 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-400/10">
                        Over 2 million free images
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                        The internet's{" "}
                        <span className="bg-linear-to-br from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            source
                        </span>{" "}
                        for visuals
                    </h1>
                    <p className="text-white/50 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                        Powered by creators everywhere. Download and use any photo for free, no attribution required.
                    </p>

                    <div className="w-full max-w-xl flex items-center gap-0 bg-white/10 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/25 transition-colors focus-within:border-violet-500/60 focus-within:bg-white/[0.12]">
                        <div className="pl-5 pr-3 text-white/40">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search high-resolution photos..."
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            className="flex-1 bg-transparent py-4 text-sm text-white placeholder:text-white/35 outline-none"
                        />
                        <button onClick={handleSearch} className="m-1.5 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-colors">
                            Search
                        </button>
                    </div>

                    <p className="mt-4 text-xs text-white/30">
                        Try:{" "}
                        {["Mountains", "City nights", "Minimalism", "Forest"].map((t, i) => (
                            <span key={t}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setInputVal(t); fetchAllWallpaper(t); }} className="hover:text-white/60 transition-colors underline underline-offset-2">
                                    {t}
                                </a>
                                {i < 3 && <span className="mx-1.5">·</span>}
                            </span>
                        ))}
                    </p>
                </div>
            </section>

            <section className="px-6 md:px-12 py-16">
                <div className="w-full">
                    <div className="flex items-center justify-between mb-8 px-6 md:px-12">
                        <h2 className="text-xl font-semibold">Browse by category</h2>
                        <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                            View all →
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6 md:px-12">
                        {categories.map(({ label, count }) => (
                            <button
                                key={label}
                                onClick={() => { setInputVal(label); fetchAllWallpaper(label); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all duration-300 p-5 text-left"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <p className="font-semibold text-white/90 mb-1 relative">{label}</p>
                                <p className="text-xs text-white/35 relative">{count}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-12 py-8">
                <div className="w-full">
                    <div className="flex items-center justify-between mb-8 px-6 md:px-12">
                        <h2 className="text-xl font-semibold">
                            {search ? `Results for "${search}"` : "Featured this week"}
                        </h2>
                        <span className="text-sm text-white/40">
                            {loading ? "Loading..." : `${allHits.length} photos`}
                        </span>
                    </div>

                    <div className="columns-2 md:columns-3 lg:columns-4 gap-3 px-6 md:px-12">
                        {loading
                            ? [...Array(8)].map((_, n) => (
                                <div key={n} className="break-inside-avoid mb-3 bg-white/5 animate-pulse rounded-2xl h-48" />
                            ))
                            : allHits.map((wallpaper) => (
                                <div
                                    key={wallpaper.id}
                                    className="break-inside-avoid mb-3 group relative overflow-hidden rounded-2xl cursor-pointer"
                                >
                                    <img
                                        src={wallpaper.largeImageURL}
                                        alt={wallpaper.tags}
                                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="text-sm font-semibold text-white truncate">{wallpaper.tags.split(",")[0]}</p>
                                        <p className="text-xs text-white/60 mt-0.5">by {wallpaper.user}</p>
                                    </div>
                                    <a
                                        href={wallpaper.largeImageURL}
                                        download
                                        target="_blank"
                                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60"
                                    >
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-12 py-12 pb-24">
                <div className="w-full">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-violet-900/60 to-indigo-900/60 border border-violet-500/20 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mx-6 md:mx-12">
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `url("https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=50")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B]/60 to-transparent" />
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                Share your vision<br />with the world
                            </h2>
                            <p className="text-white/50 max-w-sm">
                                Join 500,000+ photographers and contribute your work to a global creative community.
                            </p>
                        </div>
                        <div className="relative flex gap-3 shrink-0">
                            <button className="px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                                Start uploading
                            </button>
                            <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/5 px-8 py-8">
                <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold">
                            V
                        </div>
                        <span className="text-sm font-semibold tracking-widest uppercase text-white/60">
                            Vistara
                        </span>
                    </div>
                    <div className="flex gap-6 text-xs text-white/30">
                        {["License", "Privacy", "Terms", "About"].map((l) => (
                            <a key={l} href="#" className="hover:text-white/60 transition-colors">
                                {l}
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-white/20">© 2026 Vistara. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}