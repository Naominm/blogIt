import { MenuItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const DefaultMenuLinks = (
  <>
    <Paper sx={{ backgroundColor: "crimson", textTransform: "uppercase" }}>
      <MenuItem
        component={Link}
        to="/auth/login"
        sx={{ color: "white", fontWeight: 600 }}
      >
        Login
      </MenuItem>
    </Paper>
    <Paper sx={{ backgroundColor: "crimson", textTransform: "uppercase" }}>
      <MenuItem
        component={Link}
        to="/auth/register"
        sx={{ color: "white", fontWeight: 600 }}
      >
        Sign Up
      </MenuItem>
    </Paper>
  </>
);

export default DefaultMenuLinks;
