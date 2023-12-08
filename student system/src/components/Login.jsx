import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./firebaseConfig";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    const auth = getAuth(firebaseApp);
    
    if(email !== '' && password !== '') {
      try {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
          const user = userCredential.user;
          alert('signed in!');
        });
      } catch (error) {
        alert(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    } else {
      alert('missing credentials!')
    }
  }
  
  return(
    <div className="container border p-5 rounded">
        <h1 className="fw-bold">Login</h1>
        <p>Enter your email and password to login.</p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <label htmlFor="password" className="mt-3">Password</label>
        <input id="password" type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button className="btn btn-dark mt-3" onClick={()=>{handleLogin()}}>Login</button>
        <hr />
        <Link to="/register">Don't have an account? Register here.</Link>
    </div>
)
}

export default Login