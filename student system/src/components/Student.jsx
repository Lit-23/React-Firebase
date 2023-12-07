const Student = ({ firstname, lastname, grade, id, deleteStudent, updateStudent }) => {
  return (
    <div className="alert alert-light">
        {lastname}, {firstname} <span className="badge bg-dark">{grade}</span>
        <button className="btn btn-sm btn-danger float-end" onClick={() => deleteStudent(id)}>Delete</button>
        <button className="btn btn-sm btn-secondary float-end me-2" onClick={() => updateStudent(id, firstname, lastname, grade)}>Edit</button>
    </div>
  )
}

export default Student