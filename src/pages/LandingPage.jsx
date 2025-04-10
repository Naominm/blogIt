import { Typography,AppBar,Box,Toolbar,IconButton,Container } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
function LandingPage() {
  return (
    <div className="landingPage">
   <NavBar/>
    </div>
  );
}
 function NavBar(){
  return(
    <AppBar position=" static">
    <Container maxWidth="xl">
    <Toolbar>
      <BookIcon sx={{display:{xs:"none", md:"flex"},mr:1}}/>
      <Typography 
      variant="h6"
      noWrap
      component="a"
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

    </Toolbar>

    </Container>

    </AppBar>
  )
 }

export default LandingPage;
