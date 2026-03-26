import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App() {
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

  return (
    <>
      <Form allStudents={allStudents} setAllStudents={setAllStudents} />
      <Table allStudents={allStudents} />
    </>
  );
}