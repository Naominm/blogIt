import {Route, Routes} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUp";
import LoginPage from './pages/Login';
function App() {
  return (
    <>
      <div className="main">
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signUp" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
       </Routes>
      </div>
    </>
  );
}

export default App;
