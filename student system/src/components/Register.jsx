import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    if(email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          alert('created an account!')
        })
        .catch((error) => {
          alert(error)
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      alert('incorrect or missing credentials!')
    }
  }

  return (
    <div className="container border p-5 rounded">
      <h1 className="fw-bold">Registration</h1>
      <p>Create your account here.</p>
      {/* <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="firstname">First Name</label>
          <input id="firstname" type="text" className="form-control" onChange={(e)=>setFirstname(e.target.value)} value={firstname} />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastname">Last Name</label>
          <input id="lastname" type="text" className="form-control" onChange={(e)=>setLastname(e.target.value)} value={lastname} />
        </div>
      </div> */}
      <label htmlFor="email">Email</label>
      <input id="email" type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <label htmlFor="password" className="mt-3">Password</label>
      <input id="password" type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} />
      <label htmlFor="confirmPassword" className="mt-3">Confirm password</label>
      <input id="confirmPassword" type="password" className="form-control" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} />
      <button className="btn btn-dark mt-3" onClick={handleRegistration}>Register</button>
      <hr />
      <Link to="/login">Already have an account? Login here.</Link>
    </div>
  )
}

export default Register