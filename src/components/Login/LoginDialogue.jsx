import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #0874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 78.7%;
  width: 25%;
  padding: 45px 35px;
  & > p,
  h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 10px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 40px;
  border-radius: 3px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 40px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders,  WishList and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here",
    subHeading: "Sign up with your Mobile to get started",
  },
};

const LoginDialogue = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
  };
  const toggleSignUp = () => {
    toggleAccount(accountInitialValue.signup);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography>{account.subHeading}</Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile Number"
              ></TextField>
              <TextField variant="standard" label="Enter Password"></TextField>
              <Text>By Continuing, You're agree to our policy</Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignUp}>
                New to Flipkart Create new account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter First Name"
              ></TextField>
              <TextField variant="standard" label="Enter Last Name"></TextField>
              <TextField variant="standard" label="Enter username"></TextField>
              <TextField variant="standard" label="Enter Email"></TextField>
              <TextField variant="standard" label="Enter Password"></TextField>
              <TextField variant="standard" label="Enter Phone"></TextField>
              <LoginButton>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
