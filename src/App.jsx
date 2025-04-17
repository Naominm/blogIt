import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUp";
import BlogListing from "./pages/BlogListing";
import Protected from "./components/protected";
import LoginPage from "./pages/Login";
import WritersPage from "./pages/WritePage";
import ArticlesPage from "./pages/ArticlePage";
import MyBlogsPage from "./pages/MyBlogs";
import EditBlogPage from "./pages/EditBlogPage";
import MyProfilePage from "./pages/MyProfile";
function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/register" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route
            path="/blogs"
            element={
              <Protected>
                <BlogListing />
              </Protected>
            }
          />
          <Route
            path="/writers"
            element={
              <Protected>
                <WritersPage />
              </Protected>
            }
          />
          <Route
            path="/articles/:blogId"
            element={
              <Protected>
                <ArticlesPage />
              </Protected>
            }
          />
          <Route
            path="/blogs/:blogId"
            element={
              <Protected>
                <MyBlogsPage />
              </Protected>
            }
          />
          <Route
            path="/edit/:blogId"
            element={
              <Protected>
                <EditBlogPage />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <MyProfilePage />
              </Protected>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
