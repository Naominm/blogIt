import { Typography,Box } from "@mui/material";
import BgImage from "../assets/teal.jpg"

function SignupPage() {
    return ( 
        <Box sx={{display:"flex"}}>
            <Box component="img" src={BgImage} sx={{height:{xs:"auto" , md:"100vh"}}}>
            </Box>
            <Box >hello</Box>
            </Box>
     );
}

export default SignupPage;