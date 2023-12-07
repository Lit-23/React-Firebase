// import { doc, deleteDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig";

const Student = ({ firstname, lastname, grade, id, deleteStudent }) => {
  // const deleteStudent = () => {
  //   deleteDoc(doc(db, "students", id));
  //   setStudentList(studentList)
  // }

  return (
    <div className="alert alert-light">
        {lastname}, {firstname} <span className="badge bg-dark">{grade}</span>
        <button className="btn btn-sm btn-danger float-end" onClick={() => deleteStudent(id)}>Delete</button>
        <button className="btn btn-sm btn-secondary float-end me-2">Edit</button>
    </div>
  )
}

export default Student