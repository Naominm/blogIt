import { useState } from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  MenuItem,
  Menu,
  Paper,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BookIcon from "@mui/icons-material/Book";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HeroImage from "../assets/teal.jpg";

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

function LandingPage() {
  return (
    <div className="landingPage">
      <NavBar />
      <LandingHero />
    </div>
  );
}
function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position=" static" sx={{ backgroundColor: "teal" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <BookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              typography={theme}
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BlogIt
            </Typography>
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
                  to="/"
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
                  to="/"
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

function LandingHero() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 5,
          mx:5,
          mt: 8,
          maxHeight: "100vh"
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography
            variant="h4"
            typography={theme}
            sx={{
              textTransform: "capitalize",
              fontWeight: "800",
              fontFamily: "Montserrat",
            }}
          >
            Share your Story with the world
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "600", fontFamily: "Open Sans" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ab
            quas eligendi quaerat amet inventore aperiam debitis necessitatibus
            quo. Debitis dolores adipisci, omnis voluptatum explicabo magnam cum
            odit consectetur. Numquam.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                backgroundColor: "crimson",
                fontWeight: 700,
                fontFamily: "Open Sans",
                letterSpacing:".1rem",
              }}
            >
              start wiring
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                mt: 2,
                border: "1px solid crimson",
                fontWeight: 700,
                letterSpacing:".2rem",
                fontFamily: "Open Sans",
                color: "crimson",
              }}
            >
              Explore Stories
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          src={HeroImage}
          sx={{ width: { xs: "100%", md: "50%" }, border: "none", height:{xs:"auto" ,md:"450px"},objectFit:"cover", objectPosition:"bottom" }}
        ></Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
