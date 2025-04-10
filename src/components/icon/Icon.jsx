import {Typography,Box } from "@mui/material";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";

function Icon() {
    return ( 
       <Box sx={{display:"flex", alignItems:"center"}}>
         <BookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
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
       </Box> 
     );
}

export default Icon;