import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
// import Info from './pages/Info';
// import Community from './pages/Community';
// import Charger from './pages/Charger';
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path='/info' element={<Info />} />
        <Route path='/community' element={<Community />} />
        <Route path='/charger' element={<Charger />} />
        <Route path='*' element={<NotFound />} /> // 정의하지 않은 경로로 접속?! */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
