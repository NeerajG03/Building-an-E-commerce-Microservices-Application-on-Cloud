import { TextField, Button } from '@material-ui/core';

export default function LoginForm(){

  return (
    <form>
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <Button variant="contained" color="primary">Login</Button>
    </form>
  );
  
}
