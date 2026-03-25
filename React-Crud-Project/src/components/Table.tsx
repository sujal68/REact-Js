import { useEffect, useState } from "react";

export default function Table() {

    const [allStudents, setAllStudents] = useState<studentType[]>(JSON.parse(localStorage.getItem('students') || "[]"));

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

    useEffect(() => {
        console.log("Table All Students : ", allStudents);
    }, [])

    
}

