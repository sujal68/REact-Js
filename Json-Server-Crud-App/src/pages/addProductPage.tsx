import { useState } from "react";
import { FaLeaf, FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router";

export default function AddProductPage() {
    const [formData, setFormData] = useState<{
        name: string;
        price: string;
        category: string;
        origin: string;
        description: string;
        stock: string;
        image: File | null;
        isOrganic: boolean;
    }>({
        name: "",
        price: "",
        category: "mango",
        origin: "",
        description: "",
        stock: "",
        image: null,
        isOrganic: true,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({ ...prev, image: file }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Product Data:", formData);
            setSubmitStatus("success");
            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: "",
                    price: "",
                    category: "mango",
                    origin: "",
                    description: "",
                    stock: "",
                    image: null,
                    isOrganic: true,
                });
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus(null), 3000);
        } finally {
            setIsSubmitting(false);
        }
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

                    @keyframes shimmer {
                        0% { background-position: -200% center; }
                        100% { background-position: 200% center; }
                    }

                    @keyframes successPop {
                        0% { transform: scale(0.8); opacity: 0; }
                        70% { transform: scale(1.1); }
                        100% { transform: scale(1); opacity: 1; }
                    }

                    .animate-fade-up { animation: fadeSlideUp 0.6s ease 0.2s both; }
                    .animate-fade-up-delay { animation: fadeSlideUp 0.6s ease 0.4s both; }
                    .animate-success { animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }

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

                    .glass-form {
                        background: rgba(255,255,255,0.88);
                        backdrop-filter: blur(20px) saturate(180%);
                        border: 1px solid rgba(255,255,255,0.95);
                        box-shadow: 0 8px 32px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.9);
                    }

                    .form-input, .form-textarea, .form-select {
                        background: rgba(255,255,255,0.95);
                        border: 1.5px solid rgba(34,197,94,0.15);
                        transition: all 0.3s ease;
                        font-family: 'DM Sans', sans-serif;
                    }

                    .form-input:focus, .form-textarea:focus, .form-select:focus {
                        outline: none;
                        border-color: #22c55e;
                        box-shadow: 0 0 0 3px rgba(34,197,94,0.1);
                        background: white;
                    }

                    .form-input:hover, .form-textarea:hover, .form-select:hover {
                        border-color: rgba(34,197,94,0.4);
                    }

                    .btn-submit {
                        background: linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%);
                        transition: all 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
                    }

                    .btn-submit:hover:not(:disabled) {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 30px rgba(22,163,74,0.3);
                    }

                    .btn-submit:active:not(:disabled) {
                        transform: translateY(0);
                    }

                    .image-preview {
                        background: rgba(240,253,244,0.6);
                        border: 2px dashed rgba(34,197,94,0.3);
                        transition: all 0.3s ease;
                    }

                    .image-preview:hover {
                        border-color: #22c55e;
                        background: rgba(240,253,244,0.8);
                    }

                    .dot-grid {
                        position: absolute;
                        inset: 0;
                        background-image: radial-gradient(circle, rgba(22,163,74,0.06) 1px, transparent 1px);
                        background-size: 28px 28px;
                        pointer-events: none;
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

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header with back button */}
                    <div className="animate-fade-up mb-8">
                        <NavLink
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors mb-6 group"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="text-sm font-medium">Back to Home</span>
                        </NavLink>

                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-5">
                                <FaLeaf className="text-green-500 text-xs" />
                                <span className="text-xs font-semibold text-green-700 tracking-wide">FARMER'S PORTAL</span>
                            </div>
                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Add New <span className="text-green-600">Product</span>
                            </h1>
                            <p className="text-gray-500 text-base max-w-xl mx-auto lg:mx-0">
                                Share your farm-fresh produce with our community — every fruit tells a story.
                            </p>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="animate-fade-up-delay">
                        <div className="glass-form rounded-3xl p-6 sm:p-8 lg:p-10">
                            {submitStatus === "success" && (
                                <div className="animate-success mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                                    <p className="text-green-700 font-medium">Product added successfully! Redirecting...</p>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="animate-success mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
                                    <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
                                    <p className="text-red-700 font-medium">Something went wrong. Please try again.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                    {/* Left Column */}
                                    <div className="space-y-6">
                                        {/* Product Name */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Product Name <span className="text-green-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="form-input w-full px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-400"
                                                placeholder="e.g., Organic Alphonso Mango"
                                            />
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Price (₹) <span className="text-green-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                required
                                                step="0.01"
                                                min="0"
                                                className="form-input w-full px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-400"
                                                placeholder="e.g., 450"
                                            />
                                        </div>

                                        {/* Category */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Category <span className="text-green-500">*</span>
                                            </label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="form-select w-full px-5 py-3.5 rounded-xl text-gray-800 bg-white"
                                            >
                                                <option value="mango">Mango</option>
                                                <option value="apple">Apple</option>
                                                <option value="orange">Orange</option>
                                                <option value="grapes">Grapes</option>
                                                <option value="strawberry">Strawberry</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Origin */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Origin / Farm Location
                                            </label>
                                            <input
                                                type="text"
                                                name="origin"
                                                value={formData.origin}
                                                onChange={handleChange}
                                                className="form-input w-full px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-400"
                                                placeholder="e.g., Ratnagiri, Maharashtra"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        {/* Stock */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Stock Quantity <span className="text-green-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="stock"
                                                value={formData.stock}
                                                onChange={handleChange}
                                                required
                                                min="0"
                                                className="form-input w-full px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-400"
                                                placeholder="e.g., 100"
                                            />
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                rows={4}
                                                className="form-textarea w-full px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-400 resize-none"
                                                placeholder="Describe your product — taste notes, harvesting method, special features..."
                                            />
                                        </div>

                                        {/* Organic Checkbox */}
                                        <div className="flex items-center gap-3 pt-2">
                                            <input
                                                type="checkbox"
                                                name="isOrganic"
                                                checked={formData.isOrganic}
                                                onChange={handleChange}
                                                className="w-5 h-5 rounded border-green-300 text-green-600 focus:ring-green-500"
                                            />
                                            <label className="text-gray-700 font-medium">
                                                Certified Organic
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div className="mt-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Product Image
                                    </label>
                                    <div className="image-preview rounded-xl p-6 text-center cursor-pointer transition-all">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                            id="image-upload"
                                        />
                                        <label htmlFor="image-upload" className="cursor-pointer block">
                                            {formData.image ? (
                                                <div className="space-y-3">
                                                    <img
                                                        src={URL.createObjectURL(formData.image)}
                                                        alt="Preview"
                                                        className="max-h-40 mx-auto rounded-lg object-contain"
                                                    />
                                                    <p className="text-sm text-green-600 font-medium">
                                                        {formData.image.name}
                                                    </p>
                                                    <p className="text-xs text-gray-400">Click to change image</p>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                                        <FaUpload className="text-green-500 text-xl" />
                                                    </div>
                                                    <p className="text-gray-500">
                                                        Click or drag to upload product image
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        PNG, JPG up to 5MB
                                                    </p>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
                                    <NavLink
                                        to="/"
                                        className="px-8 py-3.5 rounded-xl text-gray-600 font-medium border border-gray-200 hover:border-green-300 hover:text-green-600 transition-all text-center"
                                    >
                                        Cancel
                                    </NavLink>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-submit px-10 py-3.5 rounded-xl text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed min-w-[160px]"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Adding...
                                            </div>
                                        ) : (
                                            "Add Product →"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Help text */}
                        <p className="text-center text-gray-400 text-xs mt-8">
                            By adding a product, you agree to our quality guidelines and terms of service.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}