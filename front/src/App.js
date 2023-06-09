import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ROUTE_ARR } from './routes';
import { useUserState } from './UserContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import LoginForm from './pages/User/Login/LoginForm';
import RegisterForm from './pages/User/Register/RegisterForm';
import EnvPosting from './pages/EnvPosting/EnvPosting';
import Community from './pages/Community/Community';
import Charger from './pages/Charger/Charger';
import MyPage from './pages/User/MyPage/MyPage';

function App() {
  const { user } = useUserState();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/envposting' element={<EnvPosting />} />
        <Route path='/community' element={<Community />} />
        <Route path='/charger' element={<Charger />} />
        { user && (
          <Route path='/mypage' element={<MyPage />} />
        )}
          {/* {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          )
        })} */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
