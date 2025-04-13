import { Avatar } from "@mui/material";
import AvatarImage from "../assets/blog.png";
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
function EditBlogPAge() {
  return (
    <>
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "listing", path: "/explore" },
          { label: "Write", path: "/writers" },
          { label: "My Blogs", path: "/my-blogs" },
          { label: "My Profile", path: "/profile" },
        ]}
        extraComponents={
          <>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
    </>
  );
}

export default EditBlogPAge;
