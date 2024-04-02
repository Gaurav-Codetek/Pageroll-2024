// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import PostForm from './components/PostForm';
import EmailVer from './components/EmailVer';
import PassChange from './components/PassChange';
import OAuth1 from './components/OAuth1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/create-post" element={<PostForm />} />
          <Route path='/email-verification' element={<EmailVer />} />
          <Route path='/pass-change' element={<PassChange />} />
          <Route path='/auth1' element={<OAuth1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
