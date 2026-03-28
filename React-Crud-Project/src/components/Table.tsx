import { useEffect, useState } from "react";
import type { studentType } from "../utils/global";

type props = {
    allStudents: studentType[],
    deleteStudent: (index: number) => void
}

export default function Table({ allStudents , deleteStudent}: props) {



    // const [allStudents, setAllStudents] = useState<studentType[]>(JSON.parse(localStorage.getItem('students') || "[]"));

    // type studentType = {
    //     fName: string,
    //     lName: string,
    //     email: string,
    //     phone: string,
    //     gender: string,
    //     hobby: string[],
    //     course: string,
    //     city: string
    // };


    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Student <span className="text-blue-600">Database</span>
                </h1>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Manage and view all student records in one centralized dashboard.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-t-2xl shadow-sm border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search records..."
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200 sm:text-sm"
                        />
                    </div>
                    <button className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Export CSV
                    </button>
                </div>

                <div className="bg-white shadow-xl rounded-b-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {["ID", "Name", "Contact Info", "Details", "Hobby", "Actions"].map((head) => (
                                        <th key={head} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {allStudents.map((student, index) => (
                                    <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-400">
                                            #{index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-gray-900">{student.fName} {student.lName}</div>
                                            <div className="text-xs text-gray-500">{student.gender}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-blue-600 font-medium">{student.email}</div>
                                            <div className="text-xs text-gray-500">{student.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold uppercase">
                                                {student.city}
                                            </span>
                                            <div className="text-[11px] mt-1 text-gray-400 truncate max-w-[150px]">
                                                {student.course}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {Array.isArray(student.hobby) ? student.hobby.map((h, i) => (
                                                    <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium">
                                                        {h}
                                                    </span>
                                                )) : <span className="text-gray-400 text-xs">No hobbies</span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center space-x-3">
                                                <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition cursor-pointer">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => { deleteStudent(index); }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition cursor-pointer">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {allStudents.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 italic">No student records found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

