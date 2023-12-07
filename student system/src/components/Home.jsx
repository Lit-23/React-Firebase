import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

import Student from './Student';

const Home = () => {
  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
    grade: ''
  });
  const [studentList, setStudentList] = useState([]);
  const [editToggle, setEditToggle] = useState(false);

  const getStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const students = querySnapshot.docs.map((doc) => (
      { ...doc.data(), id: doc.id }
    ));
    setStudentList(students);
  };

  useEffect(() => {
    getStudents()
  }, []);

  const addStudent = () => {
    if( student.firstname === '' || student.lastname === '' || student.grade === '' ) {
      alert('Missing field');
    } else{
      setStudentList(
        studentList => [
          ...studentList, student
        ]
      );

      addDoc(collection(db, 'students'), student);
  
      setStudent({
        firstname: '',
        lastname: '',
        grade: ''
      });
    }
  };
  
  const deleteStudent = ( id ) => {
    deleteDoc(doc(db, 'students', id));
    getStudents();
  };

  const updateStudent = (id, firstname, lastname, grade) => {
    setEditToggle(true);

    setStudent({
      id,
      firstname,
      lastname,
      grade
    });
  };

  const handleUpdate = () => {
    const studentRef = doc(db, "students", student.id);

    updateDoc(studentRef, {
      firstname: student.firstname,
      lastname: student.lastname,
      grade: student.grade
    });
    getStudents();
    setEditToggle(true);
  
    setStudent({
      firstname: '',
      lastname: '',
      grade: ''
    });
  }

  return (
    <section className='p-5'>
      <h1>👨‍🎓Student Records</h1>
      <p>This is a student list records.</p>

      <div className='alert alert-light'>
        <div className='row'>
          <div className='col-md-5'>
            <label htmlFor="firstname">Firstname:</label>
            <input 
              id='firstname' 
              className='form-control' 
              type="text" 
              required
              value={student.firstname}
              onChange={(e) => setStudent({
                ...student,
                firstname: e.target.value
              })} 
            />
          </div>
          <div className='col-md-5'>
            <label htmlFor="lastname">Lastname:</label>
            <input 
              id='lastname' 
              className='form-control' 
              type="text" 
              required
              value={student.lastname}
              onChange={(e) => setStudent({
                ...student,
                lastname: e.target.value
              })}
            />
          </div>
          <div className='col-md-2'>
            <label htmlFor="grade">Grade:</label>
            <input 
              id='grade' 
              className='form-control' 
              type="number" 
              required
              value={student.grade}
              onChange={(e) => setStudent({
                ...student,
                grade: e.target.value
              })}
            />
          </div>

          <div className='col-md-2'>
            {
              editToggle 
                ? <button onClick={handleUpdate} className='btn btn-success mt-3'>Update</button>
                : <button onClick={addStudent} className='btn btn-dark mt-3'>Add +</button>
            }
          </div>

          <div className='alert alert-light mt-3'>
            <h3 className='fw-bold'>
              {student.firstname} {student.lastname} <span className='badge bg-dark'>{student.grade}</span>
            </h3>
          </div>
        </div>
      </div>
      <hr />

      {
        studentList && studentList.map((studentRecord, i) => (
          <Student 
            key={i} 
            firstname={studentRecord.firstname} 
            lastname={studentRecord.lastname} 
            grade={studentRecord.grade} 
            id={studentRecord.id}
            deleteStudent={deleteStudent}
            updateStudent={updateStudent}
          />
        ))
      }
    </section>
  )
}

export default Home