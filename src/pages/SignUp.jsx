import { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Paper,
  Button,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import BgImage from "../assets/illustration.jpg";
import Icon from "../components/icon/Icon";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async () => {
      const response = await axios.post(`http://localhost:4000/auth/register`, {
        firstName,
        lastName,
        userName,
        emailAddress,
        password,
      });
      return response.data;
    },
    onSuccess: () => {
      setIsSignup(false);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const serverMessage = err.response.data.message;
        setFormError(serverMessage);
      } else {
        setFormError("Something Went Wrong ");
      }
    },
  });

  function handleRegister(e) {
    e.preventDefault();
    setFormError(null);
    // console.log("formdata",{firstName,lastName,emailAddress,userName,password,confirmPassword})
    if (password !== confirmPassword) {
      setFormError("password and confirm password must match");
      return;
    }
    mutate();
  }
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
            backgroundColor: "rgba(6, 69, 57, 0.8)",
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
          <Box sx={{ width: "40%", px: 2 }}>
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
              {formError && (
                <Alert severity="error" sx={{ mb: 2, mx: 2 }}>
                  {formError}
                </Alert>
              )}
              <FormControl
                component="form"
                onSubmit={handleRegister}
                sx={{ display: "flex", gap: "0.8rem", px: "5rem" }}
              >
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="last Name"
                  type="name"
                  name="last Name"
                  required
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
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
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  {isPending ? "please wait..." : "Create an Account"}
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
                label=" Enter your UserName or Email"
                type="text"
                name="identifier"
                required
                fullWidth
                size="small"
                variant="outlined"
              />

              <TextField
                label="Enter your password"
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
