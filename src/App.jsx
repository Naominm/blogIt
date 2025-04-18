import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUp";
import BlogListing from "./pages/BlogListing";
import Protected from "./components/protected";
import LoginPage from "./pages/Login";
import WritersPage from "./pages/WritePage";
import ArticlesPage from "./pages/ArticlePage";
import MyBlogsPage from "./pages/MyBlogs";
import EditPage from "./pages/EditBlogPage";
import MyProfilePage from "./pages/MyProfile";
import MainLayout from "./components/mainLayoutNav";

const handleLogout = () => {
  localStorage.removeItem("authToken");
  sessionStorage.clear();

  navigate("/");
};
function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/register" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />

          <Route
            element={
              <Protected>
                <MainLayout logout={handleLogout} />
              </Protected>
            }
          >
            <Route path="/blogs" element={<BlogListing />} />
            <Route path="/writers" element={<WritersPage />} />
            <Route path="/articles/:blogId" element={<ArticlesPage />} />
            <Route path="/blogs/:blogId" element={<MyBlogsPage />} />
            <Route path="/edit/:blogId" element={<EditPage />} />
            <Route path="/profile" element={<MyProfilePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
