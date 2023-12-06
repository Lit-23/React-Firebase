const Student = ({ firstname, lastname, grade }) => {
  return (
    <div className="alert alert-light">
        {lastname}, {firstname} <span className="badge bg-dark">{grade}</span>
        <button className="btn btn-sm btn-danger float-end">Delete</button>
        <button className="btn btn-sm btn-secondary float-end me-2">Edit</button>
    </div>
  )
}

export default Student