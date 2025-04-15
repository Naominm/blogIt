import { Avatar } from "@mui/material";
import AvatarImage from "../assets/blog.png";
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
import WritersForm from "../components/WritersCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
function EditBlogPAge() {
  const { blogId } = useParams();
  console.log("blog with id" ,blogId);
  const { isLoading, data, error } = useQuery({
    queryKey: ["get-blog", blogId],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:4000/blogs/${blogId}`,{
        withCredentials:true,
        headers:{
          Authorization: `Bearer ${localStorage.getItem("blogitAuthToken")}`, 
        }
        
      });
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog data.</p>;

  return (
    <>
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "listing", path: "/explore" },
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
      <WritersForm
       initialTitle={data.title} 
       initialExcerpt={data.excerpt} 
       initialContent={data.content}/>
    </>
  );
}

export default EditBlogPAge;
