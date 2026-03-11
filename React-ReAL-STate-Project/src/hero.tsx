import logo from "./assets/hero-banner.jpg";

export default function Hero() {
    return <>
        <div className="container mx-auto px-45 py-20 ">
            <div className="flex">
                <h1 className="text-7xl">Designing Spaces That Reflect Your Story</h1>
                <div className="mt-17">
                    <p className="text-lg leading-relaxed text-mist-500">Explore expertly crafted designs tailored to your unique taste.
                        Whether modern, minimalist, or luxurious, we bring your
                        vision to life with perfection.</p>
                    <button className="bg-blue-300 text-black font-semibold px-6 py-3 mt-6 rounded-md hover:bg-blue-400 transition duration-300">GET A FREE CONSULTATION ➹</button>
                </div>
            </div>
            <div className="items-center mt-8">
                <img src={logo} alt="Hero Banner" width={1500} className="rounded-2xl" />
            </div>
        </div>
    </>
}