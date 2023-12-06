import { useEffect, useState } from 'react'
import Student from './Student'

const Home = () => {
  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
    grade: ''
  });

  const [studentList, setStudenList] = useState([]);

  useEffect(() => {
    const savedStudentList = JSON.parse(localStorage.getItem('studentList'));

    if(savedStudentList){
      setStudenList(savedStudentList);
    }
  }, [])

  const addStudent = () => {
    if( student.firstname === '' || student.lastname === '' || student.grade === '' ) {
      alert('Missing field');
    } else{
      setStudenList(
        studentList => [
          ...studentList, student
        ]
      );
  
      setStudent({
        firstname: '',
        lastname: '',
        grade: ''
      });
      
      localStorage.setItem('studentList', JSON.stringify(studentList));
    }
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
            <button onClick={addStudent} className='btn btn-dark mt-3'>Add +</button>
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
        studentList.map((studentRecord, index) => (
          <Student 
            key={index} 
            firstname={studentRecord.firstname} 
            lastname={studentRecord.lastname} 
            grade={studentRecord.grade} 
          />
        ))
      }
    </section>
  )
}

export default Home