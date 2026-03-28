import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { toast } from "react-toastify";

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

  useEffect(() => {

    localStorage.setItem("students", JSON.stringify(allStudents));

  }, []);

  const deleteStudent = (index: number) => {

    setAllStudents(allStudent => allStudent.filter((_, i) => i !== index));

    toast.success("Student deleted successfully..");
  }


  return (
    <>
      <Form allStudents={allStudents} setAllStudents={setAllStudents} />
      <Table allStudents={allStudents} deleteStudent={deleteStudent} />
    </>
  );
}