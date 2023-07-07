import "./register.scss";
import {TextField, Button} from '@mui/material/';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export const Register = () => {

  const [state, setState] = useState({
    Name: "",
    ID: "",
    Password: "",
    Project: ""
  })
  const navigate = useNavigate()

  const hadleChange = (e)=>{
    const value = e.target.value
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const sendData = async () =>{
    navigate('/login')
    try{
      //const data = {name: {${state.Name}}, username: {${state.ID}}, password: {${state.Password}}, project:{${state.Project}}}
      const data = state
      console.log(data)
      const response = await fetch('http://localhost:3002/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      })
      console.log("Added to the DB");
      
    }catch(error){
      console.log("Error: ", error)
    }

  }



  return (
    <div className="Register">
      <div className="LoginForm">
        <h2>Registration Page</h2>
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          label="Name"
          name="Name"
          onChange={hadleChange}
          placeholder="Name"
        />
        <TextField
          required
          margin="normal"
          name="Project"
          className="inputField"
          id="outlined-required"
          onChange={hadleChange}
          label="Project"
          placeholder="Project"
        />
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          onChange={hadleChange}
          name="ID"
          label="ID"
          placeholder="ID"
        />
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          onChange={hadleChange}
          name="Password"
          label="Password"
          placeholder="Password"
        />
        <Button variant="contained" onClick={sendData}>Register</Button>
      </div>
    
    
    </div>
  )
}
export default Register