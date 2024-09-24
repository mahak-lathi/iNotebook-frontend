import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = (props) => {

const navigate = useNavigate();
const [credentials, setCredentials] = useState({name:"" , email: "", password: "" ,cpassword:""}) 
const handleSubmit = async (e) => {
  e.preventDefault();
  const { name,email,password, cpassword}= credentials;
  const response = await fetch('http://localhost:5000/api/auth/createuser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password, cpassword})
  });
  const json = await response.json()
  console.log(json);
  if(json.success){

      // Save the auth token and redirect
      localStorage.setItem('auth-token', json.authtoken); 
      
      navigate("/");
      props.showAlert("Account created successfully", "success");
  }
  
  else{
    props.showAlert("Invalid Details", "danger")
}
}
const onChange = (e)=>{
  setCredentials({ ...credentials, [e.target.name]: e.target.value})
}
  return (
    <div>
       <h4 style={{ fontStyle: 'italic',textAlign: 'center' }} className="mb-3 my-3 mt-3">Signup to continue to iNotebook</h4>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 my-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" autoComplete="given-name" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" autoComplete="off" onChange={onChange} required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 ">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" name="password" onChange={onChange} autoComplete="off" minLength={5} required/>
  </div>

<div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cPassword" name="cpassword" onChange={onChange} minLength={5} />
  </div>
  
  <button  disabled={credentials.name.length < 5 || credentials.email.length < 5 || credentials.password.length < 5 || credentials.cpassword.length < 5 || credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
</form><hr/>
<div className="mb-3 my-3">
<h6> Already have an account </h6>
<Link className="btn btn-outline-secondary btn-sm" to="/Login">Log in </Link>

</div>
    </div>
  )
}

export default Signup
