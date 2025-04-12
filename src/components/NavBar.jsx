import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useUserStore from "../../store/userStore";

function NavBar() {
  const user = useUserStore((state) => state.user);
  const removedUser = useUserStore((state) => state.removeUserInformation);
  function handleLogout() {
    removeUserInformation();
  }
  if (!user) {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "#fff" }}
          >
            BlogIt
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/login"
              color="inherit"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/sign Up"
              color="inherit"
              size="large"
              sx={{ textTransform: "none" }}
            >
              sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  } else {
    return <AppBar></AppBar>;
  }

  <Button component={Link} to="/new" color="inherit" size></Button>;
}
