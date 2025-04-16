import { Avatar } from "@mui/material";
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
import WritersForm from "../components/WritersCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import apiUrl from "../utils/apiUrl";

function EditBlogPAge() {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const {
    isLoading,
    data: blog,
  } = useQuery({
    queryKey: ["get-blog", blogId],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/blogs/${blogId}`, {
        withCredentials: true,
      });
      return response.data;
    },
  });

  useMutation({
    mutationFn: async () => {
      const response = await axios.patch(`${apiUrl}/blogs/${blogId}`, {
        title,
        excerpt,
        content,
      }, {
        withCredentials: true,
      });
  
      console.log("Updated Blog Response:", response.data); 
      return response.data;
    },
    onSuccess: (updatedBlog) => {
      console.log("Successfully updated blog:", updatedBlog);
      navigate(`/blogs/${blogId}`); 
    },
  });
  

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
      {isLoading ? (
        <p>Loading...</p>
      ) : blog ? (
        <WritersForm
          initialTitle={blog.title}
          initialExcerpt={blog.excerpt}
          initialContent={blog.content}
        />
      ) : (
        <p>Error loading blog data.</p>
      )}
    </>
  );
}

export default EditBlogPAge;
