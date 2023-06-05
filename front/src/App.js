import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTE_ARR } from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          )
        })}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
