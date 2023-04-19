import styled from "@emotion/styled";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const Component = styled(Menu)`
  margin-top: 5px;
`;

const LogOut = styled(Typography)`
  font-size: 12px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const LogOutUser = () => {
    setAccount("");
  };
  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginTop: 2, cursor: "pointer" }}
        >
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            LogOutUser();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <LogOut>LogOut</LogOut>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
