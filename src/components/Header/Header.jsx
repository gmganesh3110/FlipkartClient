import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
const StyledHeader = styled(AppBar)`
  background: #2874fo;
  height: 55px;
  line-height: 0;
`;
const Component = styled(Box)`
  margin-left: 12%;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const StyledImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonsWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt="flipkartlogo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <StyledImage src={subURL} alt="subURL" />
          </Box>
        </Component>
        <Search />
        <CustomButtonsWrapper>
          <CustomButtons />
        </CustomButtonsWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
