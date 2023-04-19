import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState, useContext } from "react";
import { authenticateLogin, authenticateSingUp } from "../../service.js/api";
import { DataContext } from "../../contexts/dataProvider";

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
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
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

const initalSignUpValue = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const initialLoginValue = {
  username: "",
  password: "",
};

const LoginDialogue = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signUp, setSignUp] = useState(initalSignUpValue);
  const [login, setlogin] = useState(initialLoginValue);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  };
  const toggleSignUp = () => {
    toggleAccount(accountInitialValue.signup);
  };
  const onInputChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };
  const onValueChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const signUpUser = async () => {
    let response = await authenticateSingUp(signUp);
    if (!response) return;
    handleClose();
    setAccount(signUp.firstName);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) return;
    if (response.status === 201) {
      handleClose();
      console.log(response.data);
      setAccount(response.data.data.firstName);
    } else {
      setError(true);
    }
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
                label="Enter Username"
                name="username"
                onInput={onValueChange}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onInput={onValueChange}
              ></TextField>
              <Text>By Continuing, You're agree to our policy</Text>
              {error && <Error>Please enter valid username or password</Error>}
              <LoginButton onClick={loginUser}>Login</LoginButton>
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
                onInput={(e) => onInputChange(e)}
                label="Enter First Name"
                name="firstName"
              ></TextField>
              <TextField
                variant="standard"
                onInput={(e) => onInputChange(e)}
                label="Enter Last Name"
                name="lastName"
              ></TextField>
              <TextField
                variant="standard"
                onInput={(e) => onInputChange(e)}
                label="Enter username"
                name="username"
              ></TextField>
              <TextField
                variant="standard"
                onInput={(e) => onInputChange(e)}
                label="Enter Email"
                name="email"
              ></TextField>
              <TextField
                variant="standard"
                onInput={(e) => onInputChange(e)}
                label="Enter Password"
                name="password"
              ></TextField>
              <TextField
                variant="standard"
                onInput={(e) => onInputChange(e)}
                label="Enter Phone"
                name="phone"
              ></TextField>
              <LoginButton onClick={signUpUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
