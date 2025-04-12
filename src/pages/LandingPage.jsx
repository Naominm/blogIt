import { Typography, Box, Button } from "@mui/material";

import HeroImage from "../assets/teal.jpg";
import NavBar from "../components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DefaultMenuLinks from "../components/DefaultNav";

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
      <NavBar extraComponents={DefaultMenuLinks} />
      <LandingHero />
    </div>
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
          mx: 5,
          mt: 8,
          maxHeight: "100vh",
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
              component={Link}
              to="/signUp"
              sx={{
                mt: 2,
                backgroundColor: "crimson",
                fontWeight: 700,
                fontFamily: "Open Sans",
                letterSpacing: ".1rem",
              }}
            >
              start wiring
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/signUp"
              sx={{
                mt: 2,
                border: "1px solid crimson",
                fontWeight: 700,
                letterSpacing: ".2rem",
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
          sx={{
            width: { xs: "100%", md: "50%" },
            border: "none",
            height: { xs: "auto", md: "450px" },
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
