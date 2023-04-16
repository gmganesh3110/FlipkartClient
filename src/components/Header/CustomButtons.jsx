import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  align-items: center;
  & > button,
  & > p,
  & > div {
    margin-left: 40px;
    font-size: 14px;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  text-transform: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant="container">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}> More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
