import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  MenuItem,
  Menu,
  Paper,
} from "@mui/material";
import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Icon from "../components/icon/Icon";
function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const theme = createTheme({
    typography: {
      fontFamily: '"Roboto", sans-serif',
      h1: {
        fontFamily: '"Montserrat", sans-serif',
      },
      h2: {
        fontFamily: '"Montserrat", sans-serif',
      },
      h3: {
        fontFamily: '"Montserrat", sans-serif',
      },
      h4: {
        fontFamily: '"Montserrat", sans-serif',
      },
      h5: {
        fontFamily: '"Montserrat", sans-serif',
      },
      h6: {
        fontFamily: '"Montserrat", sans-serif',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar position=" static" sx={{ backgroundColor: "teal" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box>
              {" "}
              <Icon />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "right",
                  gap: "2rem",
                },
              }}
            >
              <MenuItem component={Link} to="/" sx={{ color: "white" }}>
                About
              </MenuItem>
              <MenuItem component={Link} to="/" sx={{ color: "white" }}>
                Account
              </MenuItem>
              <Paper
                typography={theme}
                sx={{ backgroundColor: "crimson", textTransform: "uppercase" }}
              >
                <MenuItem
                  component={Link}
                  to="/signUp"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Login
                </MenuItem>
              </Paper>
              <Paper
                typography={theme}
                sx={{ backgroundColor: "crimson", textTransform: "uppercase" }}
              >
                <MenuItem
                  component={Link}
                  to="/signUp"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Sign Up
                </MenuItem>
              </Paper>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none " } }}>
              <IconButton
                size="large"
                aria-label="Account of the current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                <MenuItem component={Link} to="/" sx={{ color: "black" }}>
                  About
                </MenuItem>
                <MenuItem component={Link} to="/" sx={{ color: "black" }}>
                  Account
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
