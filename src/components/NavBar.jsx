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
function NavBar({
  menuItems = [],
  buttons = [],
  icon: IconComponent,
  extraComponents,
}) {
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
              {menuItems.length > 0 ? (
                menuItems.map((item) => (
                  <MenuItem
                    component={Link}
                    to={item.path}
                    sx={{ color: "white" }}
                    key={item.label}
                  >
                    {item.label}
                  </MenuItem>
                ))
              ) : (
                <></>
              )}
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
                Paper={{
                  sx: {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                {menuItems.length > 0 &&
                  menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      to={item.path}
                      onClick={handleMenuClose}
                      sx={{ color: "black" }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
            {extraComponents && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: "1rem",
                  marginLeft: "1rem",
                }}
              >
                {extraComponents}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
