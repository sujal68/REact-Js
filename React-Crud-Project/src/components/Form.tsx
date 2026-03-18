import { useState } from "react";

export default function Form() {

    const [fName, setFName] = useState<string>("");
    const [lName, setlName] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [Phone, setPhone] = useState<string>("");
    const [Gander, setGander] = useState<string>("");
    // const [Hobby, setHobby] = useState<string[]>([]);
    const [Course, setCourse] = useState<string>("");
    const [City, setCity] = useState<string>("");

    const studentFormSubmit = (event: any) => {
        event.preventDefault();
        console.log(fName)
        console.log(lName)
        console.log(Email)
        console.log(Phone)
        console.log(Gander)
        console.log(Course)
        console.log(City)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-5xl">

                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Student Registration
                </h2>

                <form className="space-y-6" onSubmit={studentFormSubmit}>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm text-gray-600">First Name</label>
                            <input type="text" placeholder="Enter first name"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={fName}
                                onChange={(event) => setFName(event.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Last Name</label>
                            <input type="text" placeholder="Enter last name"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={lName}
                                onChange={(event) => setlName(event.target.value)}
                            />

                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input type="email" placeholder="Enter email"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={Email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Phone</label>
                            <input type="text" placeholder="Enter phone"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={Phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 block mb-2">Gender</label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" className="accent-blue-600" value={Gander}
                                    onChange={(event) => setGander(event.target.value)} />
                                Male
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" className="accent-blue-600" value={Gander}
                                    onChange={(event) => setGander(event.target.value)} />
                                Female
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" className="accent-blue-600" value={Gander}
                                    onChange={(event) => setGander(event.target.value)} />
                                Other
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 block mb-2">Hobbies</label>
                        <div className="flex flex-wrap gap-6">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                Coding
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                Gaming
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                Reading
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-blue-600" />
                                Sports
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm text-gray-600">Course</label>
                            <input type="text" placeholder="Enter course"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" value={Course}
                                onChange={(event) => setCourse(event.target.value)} />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">City</label>

                            <select
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={City}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option value="">Select City</option>
                                <option value="Surat">Surat</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}