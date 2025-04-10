import { Box, Typography,FormControl, TextField,Paper, FormLabel, Button } from "@mui/material";
import BgImage from "../assets/teal.jpg";
import Icon from "../components/icon/Icon";
import { Label } from "@mui/icons-material";
import { Link } from "react-router-dom";
function SignupPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        gap:"4rem",
      }}
    >
        <Box sx={{ width:"50%", height:"100%"}}>
      <Box
        component="img"
        src={BgImage}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
           position:"relative"
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
            fontSize="3rem"
            fontFamily="Montserrat"
            color="white"
          >
            Join a community of writers and Readers.
          </Typography>
        </Box>
      </Box>
      </Box>
      <Box component="form" sx={{width:"40%", px:2}}>
      <Paper elevation={1}sx={{display:"flex" ,
        flexDirection:"column",width:"100%",height:"100%",mt:3}}>
       <Box mx={2} my={2}  sx={{fontSize:"1rem"}}><Icon/></Box> 
       <Typography variant="h5" sx={{textAlign:'center', fontWeight:700, fontFamily:"Montserrat", mb:2}}>Sign Up</Typography>
        
        <FormControl sx={{display:"flex",gap:"0.8rem", px:"5rem"}}>
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
         sx={{fontSize:"1rem"}}
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
         <Button variant="contained" sx={{mt:2}}>Create An Account</Button>
        </FormControl> 
     <Box sx={{mt:2,mb:3, textAlign:'center'}}>   <Typography   variant="subtitle"><span>Already Have an account</span></Typography><Box  
     sx={{pl:1}}    
     component={Link}>Login</Box> </Box>
        </Paper>
      </Box>
      
     
    </Box>
  );
}

export default SignupPage;
