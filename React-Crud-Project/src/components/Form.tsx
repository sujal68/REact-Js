import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({ allStudents, setAllStudents }: any) {
    const [fName, setFName] = useState<string>("");
    const [lName, setlName] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [Phone, setPhone] = useState<string>("");
    const [Gander, setGander] = useState<string>("");
    const [Hobby, setHobby] = useState<string[]>([]);
    const [Course, setCourse] = useState<string>("");
    const [City, setCity] = useState<string>("");

    const [error, setError] = useState<any>({});
    // const [allStudents, setAllStudents] = useState<studentType[]>(JSON.parse(localStorage.getItem('students') || "[]"));

    type studentType = {
        fName: string,
        lName: string,
        email: string,
        phone: string,
        gender: string,
        hobby: string[],
        course: string,
        city: string
    };


    const allHobby = ["Coding", "Gaming", "Reading", "Sports", "Other"];
    const allCity = ["Surat", "Gujarat", "Delhi", "Up", "Zarkhand", "Tamilnadu"];

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(allStudents));
    }, [allStudents]);

    const validation = () => {
        let newError: any = {};

        if (!fName.trim()) {
            newError.fname = "First name is required";
        }
        if (!lName.trim()) {
            newError.lname = "Last name is required";
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!Email) {
            newError.email = "Email is required";
        }
        else if (!emailPattern.test(Email)) {
            newError.email = "Invalid email format";
        }

        const phonePattern = /^[6-9]\d{9}$/;

        if (!Phone) {
            newError.phone = "Phone number is required";
        }
        else if (!phonePattern.test(Phone)) {
            newError.phone = "Enter a valid 10-digit number";
        }

        if (!Gander) {
            newError.gender = "Please select gender";
        }
        if (Hobby.length === 0) {
            newError.hobby = "Select at least one hobby";
        }
        if (!Course.trim()) {
            newError.course = "Course is required";
        }

        if (!City) {
            newError.city = "Please select a city";
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const studentFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!validation()) return;

        const studentData: studentType = {
            fName,
            lName,
            email: Email,
            phone: Phone,
            gender: Gander,
            hobby: Hobby,
            course: Course,
            city: City
        };

        setAllStudents(prev => [...prev, studentData]);

        setFName("");
        setlName("");
        setEmail("");
        setPhone("");
        setGander("");
        setHobby([]);
        setCourse("");
        setCity("");
        setError({});

        toast.success("🚀 Student Registered Successfully!");
    };

    const getHobby = (event: any) => {

        const data = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setHobby(abc => [...abc, data]);
        } else {
            setHobby(hobby => hobby.filter((myHobby) => myHobby !== data));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4 md:p-8">
            <ToastContainer />

            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl border border-white p-6 md:p-10 w-full max-w-4xl">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Student Registration</h2>
                    <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Enrollment Portal 2026</p>
                </div>

                <form className="space-y-8" onSubmit={studentFormSubmit}>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">First Name</label>
                            <input type="text"
                                className={`w-full p-3.5 bg-gray-50 border-2 rounded-xl transition-all outline-none focus:ring-4 ${error.fname ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                                placeholder="John"
                                value={fName}
                                onChange={(e) => setFName(e.target.value)}
                            />
                            {error.fname && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error.fname}</span>}
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Last Name</label>
                            <input type="text"
                                className={`w-full p-3.5 bg-gray-50 border-2 rounded-xl transition-all outline-none focus:ring-4 ${error.lname ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                                placeholder="Doe"
                                value={lName}
                                onChange={(e) => setlName(e.target.value)}
                            />
                            {error.lname && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error.lname}</span>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Email Address</label>
                            <input type="email"
                                className={`w-full p-3.5 bg-gray-50 border-2 rounded-xl transition-all outline-none focus:ring-4 ${error.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                                placeholder="john@example.com"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {error.email && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error.email}</span>}
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Phone Number</label>
                            <input type="text" maxLength={10}
                                inputMode="numeric"
                                className={`w-full p-3.5 bg-gray-50 border-2 rounded-xl transition-all outline-none focus:ring-4 ${error.phone ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                                placeholder="9876543210"
                                value={Phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {error.phone && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error.phone}</span>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-2">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-3 ml-1">Gender</label>
                            <div className="flex gap-4">
                                {["Male", "Female", "Other"].map((g) => (
                                    <label key={g} className={`flex-1 flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${Gander === g ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-gray-50 border-gray-100 text-gray-600 hover:border-blue-200'}`}>
                                        <input type="radio" className="hidden" value={g} checked={Gander === g} onChange={(e) => setGander(e.target.value)} />
                                        <span className="text-sm font-medium">{g}</span>
                                    </label>
                                ))}
                            </div>
                            {error.gender && <p className="text-red-500 text-xs mt-1">{error.gender}</p>}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-3 ml-1">Hobbies</label>
                            <div className="flex gap-2 flex-wrap">
                                {allHobby.map((h) => (
                                    <label key={h} className={`px-4 py-2 border-2 rounded-full cursor-pointer transition-all text-xs font-semibold ${Hobby.includes(h) ? 'bg-indigo-100 border-indigo-400 text-indigo-700' : 'bg-white border-gray-100 text-gray-500 hover:border-indigo-200'}`}>
                                        <input type="checkbox" className="hidden" value={h} checked={Hobby.includes(h)} onChange={getHobby} />
                                        {h}
                                    </label>
                                ))}
                            </div>
                            {error.hobby && <p className="text-red-500 text-xs mt-1">{error.hobby}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Course Name</label>
                            <input
                                placeholder="e.g. Full Stack Development"
                                value={Course}
                                onChange={(e) => setCourse(e.target.value)}
                                className={`w-full p-3.5 bg-gray-50 border-2 rounded-xl transition-all outline-none focus:ring-4 ${error.course ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                            />
                            {error.course && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error.course}</span>}
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Current City</label>
                            <select
                                value={City}
                                onChange={(e) => setCity(e.target.value)}
                                className={`w-full p-3.5 bg-gray-50 border-2 rounded-xl transition-all outline-none focus:ring-4 appearance-none ${error.city ? 'border-red-400 focus:ring-red-100' : 'border-gray-100 focus:border-blue-500 focus:ring-blue-100'}`}
                            >
                                <option value="" disabled>Select your city</option>
                                {allCity.map((c, i) => <option key={i} value={c}>{c}</option>)}
                            </select>
                            {error.city && <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error.city}</span>}
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95">
                            Complete Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}