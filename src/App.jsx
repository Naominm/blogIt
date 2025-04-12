import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUp";
import BlogListing from "./pages/BlogListing";
import Protected from "./components/protected";
function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route
            path="/blogs"
            element={
              <Protected>
                <BlogListing />
              </Protected>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
