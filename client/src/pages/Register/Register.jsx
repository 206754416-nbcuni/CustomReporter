import "./register.scss";
import {TextField, Button} from '@mui/material/';

export const Register = () => {
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
          placeholder="Name"
        />
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          label="Email"
          placeholder="Email"
        />
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          label="Password"
          placeholder="Password"
        />
        <Button variant="contained">Register</Button>
      </div>
    
    
    </div>
  )
}
export default Register