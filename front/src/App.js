import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Main />} />   {/*페이지 넣으면 됨*/}
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
        <Route path='/' element />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
