import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Buttons = styled(Button)`
  font-family: "Roboto" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 17px !important;
  line-height: 23px !important;
  color: black !important;
`;
const ButtonProfile = styled(Button)`
  background: #f24f17 !important;
  border-radius: 5px !important;
  width: 221px !important;
  height: 64px !important;
  border-radius: 5px !important;
  font-family: "Inter" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 20px !important;
  line-height: 24px !important;

  color: #ffffff !important;
`;

const Para = styled.p`
  margin-left: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem !important;
  line-height: 24px;
  color: #1f1f1f;
`;
const SubList = styled.ul`
  margin-left: 70px;
  list-style: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #1f1f1f;
`;

const subListItem = styled.li`
  margin-bottom: 14px;
`;

const SpanDiv = styled.span`
      text-decoration:none;
      color:black;
`;

const drawerWidth = 330;

export default function BlogsHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [hidden, setHidden] = useState(true);
  const [content, setContent] = useState(true);
  const [orders, setOrders] = useState(true);
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "white" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "black" }}
          >
            <img src="/images/ml-icon.svg"></img>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
                <Typography textAlign="center">Jobs</Typography>
                <Typography textAlign="center">Portfolio</Typography>
                <Typography textAlign="center">Blogs</Typography>
                <Typography textAlign="center">Utility Tools</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"/student-profile"} >  JOBS </Link>
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Portfolio
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Blogs
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Utility Tools
            </Buttons>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/message.svg"></img>
              </button>
            </Tooltip>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/Notification-icon.svg"></img>
              </button>
            </Tooltip>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/profile.svg"></img>
              </button>
            </Tooltip>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/shopping-cart.svg"></img>
              </button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">sachin</Typography>
                <Typography textAlign="center">sachin</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
