import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_ARR } from './routes/routes';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
