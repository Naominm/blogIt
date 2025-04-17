import { Avatar, Box } from "@mui/material";
import AvatarImage from "../assets/blog.png";
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
import WritersForm from "../components/WritersCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import apiUrl from "../utils/apiUrl";

function EditPage() {
  const { blogId } = useParams();

  const {
    isLoading,
    error,
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
      <Box sx>
        {isLoading ? (
          <p>Loading...</p>
        ) : blog ? (
          <WritersForm
            initialTitle={blog.title}
            initialExcerpt={blog.excerpt}
            initialContent={blog.content}
            initialImageUrl={blog.imageUrl}
            blogId={blog.id}
            isEdit={true}
          />
        ) : (
          <p>Error loading blog data.</p>
        )}
      </Box>
    </>
  );
}

export default EditPage;
