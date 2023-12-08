


const Login = () => {
  
  return(
    <div className="container border p-5 rounded">
        <h1 className="fw-bold">Login</h1>
        <p>Enter your email and password to login.</p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="form-control" onChange={()=>{}}  />
        <label htmlFor="password" className="mt-3">Password</label>
        <input id="password" type="password" className="form-control" onChange={()=>{}}  />
        <button className="btn btn-dark mt-3" onClick={()=>{}}>Login</button>
        <hr />
        {/* <Link to="/register">Don't have an account? Register here.</Link> */}
    </div>
)
}

export default Login