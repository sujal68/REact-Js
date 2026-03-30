import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { toast } from "react-toastify";
import type { studentType } from "./utils/global";

export default function App() {
  const [allStudents, setAllStudents] = useState<studentType[]>(JSON.parse(localStorage.getItem('students') || "[]"));

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editStudent, setEditStudent] = useState<studentType>();

  useEffect(() => {

    localStorage.setItem("students", JSON.stringify(allStudents));

  }, []);

  const deleteStudent = (index: number) => {

    setAllStudents(allStudent => allStudent.filter((_, i) => i !== index));

    toast.success("Student deleted successfully..");
  }

  const updateStudent = (index: number) => {
    setEditIndex(index);

    setEditStudent(allStudents[index]);
  }

  return (
    <>
      <Form allStudents={allStudents} setAllStudents={setAllStudents} editStudent={editStudent} editIndex={editIndex} setEditIndex={setEditIndex} />
      <Table allStudents={allStudents} deleteStudent={deleteStudent} updateStudent={updateStudent} />
    </>
  );
}