import { Box, Typography } from "@mui/material";
import BgImage from "../assets/teal.jpg";
import Icon from "../components/icon/Icon";
function SignupPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="img"
        src={BgImage}
        sx={{
          width: "50%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          height: "100%",
          width: "50%",
          backgroundColor: "rgba(0, 128, 128, 0.8)",
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
            fontSize="3rem"
            fontFamily="Montserrat"
            color="white"
          >
            Join a community of writers and Readers.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignupPage;
