import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
       if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('auth-token', json.authtoken); 
            
            props.showAlert("Logged in successfully", "success");
            navigate("/");
       }
       else{
        props.showAlert("Invalid credentials", "danger");
       }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div> <h4  style={{ fontStyle: 'italic',textAlign: 'center' }} className="mb-3 my-3">Login to continue to iNotebook</h4>
           
            <form  onSubmit={handleSubmit}>
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email}  id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} name="password" id="password" onChange={onChange}  />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form><hr/>
            <div className="mb-3 my-3">
             <h6> New to iNotebook </h6>
            <Link className="btn btn-outline-secondary btn-sm" to="/Signup">Create a new account</Link>
            </div>
        </div>
    )
}

export default Login