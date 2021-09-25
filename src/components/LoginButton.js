import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button id='logout' variant="#E05D5D" onClick={() => loginWithRedirect()}>
    Log In
  </Button>;
};
export default LoginButton;