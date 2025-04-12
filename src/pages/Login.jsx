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
import useUserStore from "../../store/userStore";
import axios from "axios";
import BgImage from "../assets/teal.jpg";
import Icon from "../components/icon/Icon";

function LoginPage() {
  const [formError, setFormError] = useState(null);
  const setUserInformation = useUserStore((state) => state.setUserInformation);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFormError(null);
    console.log({ identifier, password });
    if (!identifier || !password) {
      setFormError("All fields are required");
      return;
    }
    mutate();
  }

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async () => {
      const response = await axios.post(
        `http://localhost:4000/auth/login`,
        { identifier, password },
        { withCredentials: true },
      );
      return response.data;
    },
    onSuccess: (data) => {
      setUserInformation(data);
      navigate("/blogs");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const serverMessage = error.response.data.message;
        setFormError(serverMessage);
      } else {
        setFormError("something went wrong");
      }
    },
  });

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
              Just one step to community of writers and Readers.
            </Typography>
          </Box>
        </Box>
      </Box>

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
        {formError && (
          <Alert severity="error" sx={{ mb: 2, mx: 2 }}>
            {formError}
          </Alert>
        )}
        <FormControl
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", gap: "1.5rem", px: "5rem" }}
        >
          <TextField
            label=" Enter your UserName or Email"
            type="text"
            name="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            fullWidth
            size="small"
            variant="outlined"
          />

          <TextField
            label="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            size="small"
            variant="outlined"
          />
          <Button
            type="submit"
            disabled={isPending}
            variant="contained"
            sx={{ mt: 2 }}
          >
            {isPending ? "please wait" : "Login"}
          </Button>
          <Box sx={{ mt: 2, mb: 3, textAlign: "center" }}>
            <Typography variant="subtitle">Do not Have An Account?</Typography>
            <Box
              sx={{ pl: 1, color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/signUp")}
            >
              Sign Up
            </Box>
          </Box>
        </FormControl>
      </Paper>
    </Box>
  );
}

export default LoginPage;
