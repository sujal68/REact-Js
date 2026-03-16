export default function Form() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form className="w-[700px] bg-white border border-gray-200 shadow-sm rounded-lg p-8 space-y-6">

                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">
                    Create Profile
                </h2>

                {/* First Name */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* Last Name */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter last name"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* Email */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* Phone */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">Phone</label>
                    <input
                        type="number"
                        placeholder="Enter phone number"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* City */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">City</label>
                    <input
                        type="text"
                        placeholder="Enter city"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* Country */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">Country</label>
                    <input
                        type="text"
                        placeholder="Enter country"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* Profession */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="text-gray-700 font-medium">Profession</label>
                    <input
                        type="text"
                        placeholder="Enter profession"
                        className="col-span-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                    />
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                        Save Profile
                    </button>
                </div>

            </form>
        </div>
    );
}