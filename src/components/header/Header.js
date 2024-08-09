import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setBackGround } from "../../redux/carouselSlide";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


export default function Header() {
  const pages = ["Products", "Pricing", "Blog", "Feature", "About"];
  const settings = ["signIn", "signUp"]
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const currentBackground = useSelector((state) => state.carousel.currentBackground);
  const { currentUser } = useAuth();
  const { userLoggedIn } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState(0);

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


  const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  };
  const validBackgroundColor = isValidColor(currentBackground) ? currentBackground : '#000000'; // Default to black if invalid

  useEffect(() => {
    dispatch(setBackGround(0))
  }, [dispatch])


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: validBackgroundColor,
      },
    },
  });


  const OndoSignOut = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignOut().catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="false" disableGutters color="primary">
        <AppBar position="static" sx={{ padding: "20px" }}>
          <Toolbar disableGutters>
            <Box component="img"
              src="https://cdn-tp1.mozu.com/9046-m1/cms/files/1de6e67e-4768-45de-8bce-8f95dbd7a031?max=114"
              alt="logo"
            >
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} href="/productsHomePage">
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src="https://cdn-tp1.mozu.com/9046-m1/cms/files/1de6e67e-4768-45de-8bce-8f95dbd7a031?max=114" alt="logo"></img>
              {/* LOGO */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, marginLeft: "20%" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href="/productsHomePage"
                  sx={{
                    my: 2,
                    display: "block",
                    marginLeft: "30px",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    padding: "30px",
                    fontFamily: "merel,sans-serif",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={userLoggedIn ? currentUser.photoURL : "/static/images/avatar/2.jpg"} />
                </IconButton>
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
                {userLoggedIn ? (<MenuItem onClick={handleCloseUserMenu}>
                  <Box display="flex" flexDirection="column" width="100%" alignContent="space-around">
                    <Typography textAlign="center" sx={{ marginBottom: "20px" }}>Profile</Typography>
                    <Typography textAlign="center" onClick={OndoSignOut}>signOut</Typography>
                    <Box display="flex" justifyContent={"space-around"} sx={{marginTop:"15px"}}>
                      <Typography><LocalMallOutlinedIcon /></Typography>
                      <Typography>{cart}</Typography></Box>
                  </Box>
                </MenuItem>)
                  : settings.map((item, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center"><Link to={"/" + item}>{item}</Link></Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}
