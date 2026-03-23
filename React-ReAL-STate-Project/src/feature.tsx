import house1 from "./assets/house1.webp";
import house2 from "./assets/house2.webp";

export default function Featured() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="flex justify-between items-end mb-12">

                <div>
                    <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                        • Featured Properties
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Handpicked Homes for Refined Living
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-xl">
                        Explore our curated selection of modern homes — thoughtfully chosen
                        for their design, comfort, and lasting value.
                    </p>
                </div>

                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                    Explore All Properties
                </button>
            </div>

            {/* CARDS */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* CARD 1 */}
                <div className="bg-white rounded-2xl shadow-sm p-4">

                    <div className="relative">
                        <img src={house1} className="rounded-xl w-full" />

                        {/* TAGS */}
                        <div className="absolute bottom-3 left-3 flex gap-2">
                            <span className="bg-white px-3 py-1 rounded-full text-sm">3 beds</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">2 baths</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">2,400 sq ft</span>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">The Birch Residence</h3>
                            <p className="text-gray-500 text-sm">Birch Avenue 33, San Francisco</p>
                        </div>

                        <span className="bg-orange-200 px-4 py-1 rounded-full font-medium">
                            $1,080,000
                        </span>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white rounded-2xl shadow-sm p-4">

                    <div className="relative">
                        <img src={house2} className="rounded-xl w-full" />

                        <div className="absolute bottom-3 left-3 flex gap-2">
                            <span className="bg-white px-3 py-1 rounded-full text-sm">5 beds</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">4 baths</span>
                            <span className="bg-white px-3 py-1 rounded-full text-sm">4,500 sq ft</span>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">The Aspen Retreat</h3>
                            <p className="text-gray-500 text-sm">Aspen Hill 72, San Francisco</p>
                        </div>

                        <span className="bg-orange-200 px-4 py-1 rounded-full font-medium">
                            $2,250,000
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}