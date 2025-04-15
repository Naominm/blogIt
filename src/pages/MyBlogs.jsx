import { Avatar, Box, Paper, Button, CircularProgress, Typography } from "@mui/material";
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
import {useNavigate, useParams } from "react-router-dom";




function MyBlogsPage() {
  const navigate = useNavigate();
   const { blogId } = useParams();
   console.log(blogId)
  const{isLoading,data,error}=useQuery({
    queryKey:["get-blog" ,blogId],
    queryFn:async ()=>{
   const response=await  axios.get(`http://localhost:4000/blogs/${blogId}`,{withCredentials:true})
  return response.data
  }
  })
  console.log("BlogBata", data)

  if (isLoading){
    return(
      <Box mt={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <CircularProgress size={100}></CircularProgress>
    </Box>
    )
  }
  return (
    <>
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "listing", path: "/blogs" },
          { label: "Write", path: "/writers" },
          { label: "My Blogs", path: "/blogs/:blogId" },
          { label: "My Profile", path: "/profile" },
        ]}
        extraComponents={
          <>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F6F8FA",
          minHeight: "100vh",
        }}
      >
        <Box component="div" sx={{ mt: 5, width: "70%" }}>
          <BlogCard
            title={data.title}
            excerpt={data.excerpt}
            updatedDate={new Date(data.updatedAt).toLocaleDateString()}
            authorAvatar={AvatarImage}
            authorName={`${data.author?.firstName} ${data.author?.lastName}`}
            content={data.content}
            featuredImage={featuredImage}
            remove="Delete"
            edit="Edit"
            onEditClick={() => navigate("/edit-blogs")}
            isMyBlogPage={true}
          />
          <Box
            component="div"
            display="flex"
            gap="2rem"
            justifyContent="space-around"
          ></Box>
        </Box>
      </Paper>
    </>
  );
}

export default MyBlogsPage;
