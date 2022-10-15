import Header from "./components/Header/Header";
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom"
import { ToastContainer,} from 'react-toastify';
import Showpage from "./pages/Showpage/Showpage";
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"


function App() {
  return (
    <div>
      <Router>
      <Header />
      <div className="App">
      <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Showpage" element={<Showpage />} />
      </Routes>
      </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
