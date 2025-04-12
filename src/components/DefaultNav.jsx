import { MenuItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const DefaultMenuLinks = (
  <>
    <MenuItem component={Link} to="/" sx={{ color: "white" }}>
      About
    </MenuItem>
    <MenuItem component={Link} to="/" sx={{ color: "white" }}>
      Account
    </MenuItem>
    <Paper sx={{ backgroundColor: "crimson", textTransform: "uppercase" }}>
      <MenuItem
        component={Link}
        to="/signUp"
        sx={{ color: "white", fontWeight: 600 }}
      >
        Login
      </MenuItem>
    </Paper>
    <Paper sx={{ backgroundColor: "crimson", textTransform: "uppercase" }}>
      <MenuItem
        component={Link}
        to="/signUp"
        sx={{ color: "white", fontWeight: 600 }}
      >
        Sign Up
      </MenuItem>
    </Paper>
  </>
);

export default DefaultMenuLinks;
