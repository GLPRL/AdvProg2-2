
import './App.css';
import './stylesheets/login.css'
import './images/background.jpg'
import './images/profilePic3.jpg'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from './login/Login'
import Register from './login/Register'
function App() {
    return (
        <Router>
        <html lang="en">

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
    </html>
        </Router>
    );
}

export default App;
