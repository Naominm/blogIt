import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUp";
import BlogListing from "./pages/BlogListing";
import Protected from "./components/protected";
import LoginPage from "./pages/Login";
import WritersPage from "./pages/WritePage";
import ArticlesPage from "./pages/ArticlePage";
import MyBlogsPage from "./pages/MyBlogs";
function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/explore"
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
            path="/articles"
            element={
              <Protected>
                <ArticlesPage />
              </Protected>
            }
          />
          <Route
            path="/my-blogs"
            element={
              <Protected>
                <MyBlogsPage />
              </Protected>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
