import aboutImg from "./assets/about-img.jpg";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="flex gap-24 items-start">
                <div className="w-[40%]">

                    <p className="text-sm tracking-widest uppercase text-gray-500 mb-12">
                        • ABOUT CASAVERA
                    </p>

                    <img
                        src={aboutImg}
                        alt="Team"
                        className="rounded-2xl w-full"
                    />
                </div>
                <div className="w-[60%]">

                    <h2 className="text-3xl font-semibold leading-tight">
                        Casavera specializes in presenting modern, high-quality homes —
                        each carefully selected and exclusively available for sale.
                    </h2>

                    <p className="mt-6 text-gray-500 leading-relaxed max-w-xl">
                        We are dedicated to connecting discerning buyers with properties that blend timeless design,
                        comfort, and enduring value. With trust and professionalism at our core, Casavera offers peace
                        of mind in every purchase.
                    </p>

                    <div className="flex gap-24 mt-12">

                        <div>
                            <h3 className="text-3xl font-semibold">10+</h3>
                            <p className="text-gray-500 mt-1 text-sm">Years of Experience</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold">500+</h3>
                            <p className="text-gray-500 mt-1 text-sm">Modern Homes Sold</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold">98%</h3>
                            <p className="text-gray-500 mt-1 text-sm">Client Satisfaction Rate</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}