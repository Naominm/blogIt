import {Route, Routes} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUp";
function App() {
  return (
    <>
      <div className="main">
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signUp" element={<SignupPage/>}/>
       </Routes>
      </div>
    </>
  );
}

export default App;
