import { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import BgImage from "../assets/teal.jpg";
import Icon from "../components/icon/Icon";
function SignupPage() {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        gap: "4rem",
      }}
    >
      <Box sx={{ width: "50%", height: "100%" }}>
        <Box
          component="img"
          src={BgImage}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
          }}
        />
        <Box
          sx={{
            height: "100%",
            width: "50%",
            backgroundColor: "rgba(2, 50, 50, 0.8)",
            zIndex: 5,
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              my: 2,
              mx: 2,
              color: "white",
            }}
          >
            {" "}
            <Icon />
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="700"
              fontSize="2.5rem"
              fontFamily="Montserrat"
              color="white"
            >
              Join a community of writers and Readers.
            </Typography>
          </Box>
        </Box>
      </Box>

      {isSignup && (
        <>
          <Box component="form" sx={{ width: "40%", px: 2 }}>
            <Paper
              elevation={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                mt: 3,
              }}
            >
              <Box
                mx={2}
                my={2}
                sx={{ fontSize: "1rem", fontFamily: "Montserrat" }}
              >
                <Icon />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  mb: 2,
                }}
              ></Typography>
              <FormControl sx={{ display: "flex", gap: "0.8rem", px: "5rem" }}>
                <TextField
                  label="first Name"
                  type="first Name"
                  name="first Name"
                  autoComplete="first Name"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "1rem" }}
                />
                <TextField
                  label="last Name"
                  type="name"
                  name="last Name"
                  required
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <TextField
                  label="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                />
                <TextField
                  label="user Name"
                  type="name"
                  name="user Name"
                  autoComplete="user Name"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                />
                <TextField
                  label="password"
                  type="password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                />
                <TextField
                  label="confirm Password"
                  type="confirm Password"
                  name="confirm Password"
                  autoComplete="confirm Password"
                  autoFocus
                  required
                  fullWidth
                  size="small"
                  variant="outlined"
                />
                <Button variant="contained" sx={{ mt: 2 }}>
                  Create An Account
                </Button>
              </FormControl>

              <Box sx={{ mt: 2, mb: 3, textAlign: "center" }}>
                <Typography variant="subtitle">
                  Already have an account?
                </Typography>
                <Box
                  sx={{ pl: 1, color: "blue", cursor: "pointer" }}
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </Box>
              </Box>
            </Paper>
          </Box>
        </>
      )}
      {!isSignup && (
        <>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              width: "50%",
              height: "80%",
              mt: 5,
              mx: 5,
            }}
          >
            <Box sx={{ mx: 2, my: 2 }}>
              <Icon />
            </Box>
            <FormControl sx={{ display: "flex", gap: "1.5rem", px: "5rem" }}>
              <TextField
                label="UserName or Email"
                type="text"
                name="identifier"
                required
                fullWidth
                size="small"
                variant="outlined"
              />

              <TextField
                label="password"
                type="password"
                name="password"
                required
                fullWidth
                size="small"
                variant="outlined"
              />
              <Button variant="contained" sx={{ mt: 2 }}>
                Login
              </Button>
              <Box sx={{ mt: 2, mb: 3, textAlign: "center" }}>
                <Typography variant="subtitle">
                  Do not Have An Account?
                </Typography>
                <Box
                  sx={{ pl: 1, color: "blue", cursor: "pointer" }}
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </Box>
              </Box>
            </FormControl>
          </Paper>
        </>
      )}
    </Box>
  );
}

export default SignupPage;
