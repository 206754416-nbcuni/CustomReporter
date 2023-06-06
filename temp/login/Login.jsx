import "./login.scss";
import {TextField, Button} from '@mui/material/';

export const Login = () => {
  return (
    <div className="Login">
      <div className="LoginForm">
        <h2>Login Page</h2>
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          label="Username"
          placeholder="Username"
        />
        <TextField
          required
          margin="normal"
          className="inputField"
          id="outlined-required"
          label="Password"
          placeholder="Password"
        />
        <Button variant="contained">Login</Button>
      </div>
    
    
    </div>
  )
}
export default Login