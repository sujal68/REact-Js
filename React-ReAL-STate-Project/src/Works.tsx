import step1 from "./assets/house1.webp";
import step2 from "./assets/step2.webp";
import step3 from "./assets/step3.webp";

export default function HowItWorks() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                • HOW IT WORKS
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
                A Seamless Path to Your New Home
            </h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Casavera makes finding and securing your home simple, transparent, and effortless — every step guided with care and professionalism.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
                {[
                    {
                        step: "STEP 1",
                        title: "Explore Our Properties",
                        desc: "Discover our curated listings of modern homes for sale, each selected for quality and value.",
                        img: step1,
                    },
                    {
                        step: "STEP 2",
                        title: "Schedule a Viewing",
                        desc: "Visit your preferred homes and experience the space firsthand with guidance from our agents.",
                        img: step2,
                    },
                    {
                        step: "STEP 3",
                        title: "Finalize with Confidence",
                        desc: "Finalize your property with ease and move forward with confidence into your new home.",
                        img: step3,
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="bg-orange-200 text-sm px-4 py-1 rounded-full inline-block mb-6">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-semibold">
                            {item.title}
                        </h3>

                        <p className="text-gray-500 text-sm mt-3">
                            {item.desc}
                        </p>
                        <img
                            src={item.img}
                            className="mt-6 rounded-xl w-full"
                        />

                    </div>
                ))}

            </div>

        </div>
    );
}