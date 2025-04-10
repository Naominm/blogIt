import {useState} from 'react'
import { Typography,AppBar,Box,Toolbar,IconButton,Container,MenuItem,Menu} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
function LandingPage() {
  return (
    <div className="landingPage">
   <NavBar/>
    </div>
  );
}
 function NavBar(){
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return(
    <AppBar position=" static">
    <Container maxWidth="xl">
    <Toolbar>
      <BookIcon sx={{display:{xs:"none", md:"flex"},mr:1}}/>
      <Typography 
      variant="h6"
      noWrap
      component={Link}
      to='/'
      sx={{
        mr:2,
        display:{xs:"none" , md:"flex"},
        fontWeight:700,
        letterSpacing:".3rem",
        color:"inherit",
        textDecoration:"none"
      }}
      >
      BlogIt
      </Typography>
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent:"right" } }}>
    <MenuItem component={Link} to="/" sx={{ color: "white" }}>About</MenuItem>
    <MenuItem component={Link} to="/" sx={{ color: "white" }}>Account</MenuItem>
  </Box>
    <Box
    sx={{flexGrow:1 , display:{xs:"flex" , md:"none "}}} >
      <IconButton
      size="large"
      aria-label="Account of the current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={handleMenuOpen}
      >
        <MenuIcon/>
      </IconButton>
    <Menu 
    id='menu-appbar'
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical:"bottom",
      horizontal:"left"
    }}
    keepMounted
    transformOrigin={{
      vertical:"top",
      horizontal:"left"
    }}
    open={isMenuOpen}

    onClose={handleMenuClose}
   sx={{
    display:{xs:"block", md:"none"},
   }}
   PaperProps={{
    sx:{
      backgroundColor:"white",
      color:"black"
    }
   }}
   >
    
 <MenuItem component={Link} to="/" sx={{ color: "black" }}>About</MenuItem>
 <MenuItem component={Link} to="/"  sx={{ color: "black" }}>Account</MenuItem>
 </Menu>
    </Box>
    </Toolbar>

    </Container>

    </AppBar>
  )
 }

export default LandingPage;
