import { useState } from "react";
import "./login.scss";
import { userValidator, credentialValidator, getUser } from "./RegexValidator";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import {assingProject} from './ProjectAlloc';

export const Login = () => {
  const navigate=useNavigate()
  const [input, setInput] = useState({user:'', password:''});
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage,setSuccessMessage] = useState("")
  const [users,setUsers] = useState([])

  const handleChange = (e) =>{
    setInput({...input,[e.target.name]: e.target.value})
  };
  useEffect(()=>{
    if(localStorage.getItem('auth'))
    navigate('/')
    //const data = await fetch("http://localhost:3002/getUsers")
    //setUsers(data.json())
    async function fetchData(){
      const promise = new Promise(async (resolve, reject) => {
        
        const response = await fetch("http://localhost:3002/getUsers")
        const d = response.json()
          resolve(d);
        });
  
      promise.then((d) => {
        console.log(d)
        setUsers(d)
      });
  }
  fetchData()
  },[])
  const handleSubmit =(e) =>{
    e.preventDefault();
    setSuccessMessage('')
    setErrorMessage('')
    if(!userValidator(users, input.user))
    return setErrorMessage("Please Enter valid User ID");

    if(input.password === '')
    return setErrorMessage("Please Enter valid Password");

    // setSuccessMessage("Successfully Login")
    // if(input.user !=='206720858' || input.password !=='Sab123') 
    // if(input.user !=='206754416' || input.password !=='Pra123') 
    if(!credentialValidator(users, input.user, input.password))
    return setErrorMessage('Invalid User ID or Password')
    navigate('/')
    localStorage.setItem('auth',true)
    // localStorage.setItem('id',input.user)
    const user = getUser(users, input.user)
    localStorage.setItem('project', user.Project)
    localStorage.setItem('user', user)
    // localStorage.setItem('project', assingProject(input.user))
   
  };

  return (
    <section className="main-container">
      <div className='sub-container'>
      <div className="user-login" >
     
     <p>Emp Id Login</p>

     {errorMessage.length > 0 && (
     <div style={{ marginBottom: "20px", color: "red" }}>
     {errorMessage}
     </div>
      )}
      {successMessage.length > 0 && (
     <div style={{ marginBottom: "20px", color: "green" }}>
     {successMessage}
     </div>
      )}

     <form onSubmit={handleSubmit}>
     <div className="user-InputBox">
   <input className="input100" type="text" name="user"  onChange={handleChange} required></input>
   <label>User Id</label>
     </div>
     <div className="user-InputBox">
   <input className="input100" type="password" name="password"  onChange={handleChange} required></input>
   <label>Password</label>
     </div>
     <a href="#" onClick={handleSubmit}>
       Submit
     </a>
     </form>
   </div>
    </div>
    </section>
  )
}
export default Login