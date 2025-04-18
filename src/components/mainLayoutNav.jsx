import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";
import useProfileStore from "../../store/userProfileStore";

const MainLayout = ({ logout }) => {
const location = useLocation();
const isLandingPage = location.pathname === "/";

const firstName = useProfileStore((state) => state.firstName);
const lastName = useProfileStore((state) => state.lastName);
const avatarUrl = useProfileStore((state) => state.avatarUrl);

const getInitials = () => {
    if (firstName && lastName)
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
    if (firstName) return firstName[0].toUpperCase();
    return "?";
};

return (
    <>
    {!isLandingPage && (
        <NavBar
        icon=""
        menuItems={[
            { label: "LISTING", path: "/blogs" },
            { label: "WRITE", path: "/writers" },
            { label: "MY BLOGS", path: "/blogs/:blogId" },
            { label: "MY PROFILE", path: "/profile" },
        ]}
        extraComponents={
            <>
            <button
                onClick={logout}
                style={{ fontWeight: "bold", color: "crimson", padding: 5 }}
            >
                Logout
            </button>
            <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
                <Avatar alt={firstName} src={avatarUrl}>
                {!avatarUrl && getInitials()}
                </Avatar>
                <span>{lastName}</span>
            </div>
            </>
        }
        />
    )}
    <main>
        <Outlet />
    </main>
    </>
);
};

export default MainLayout;
