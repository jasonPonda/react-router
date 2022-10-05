/* import Navbar from "./components/navbar";  */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import Informatique from "./components/pages/informatique";
import Construction from "./components/pages/construction";
import Contact from "./components/pages/contact";
/* import  { useRef } from 'react'; */

function App() {
  /* const services = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  } */

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Informatique" element={<Informatique />} />
            <Route path="/Construction" element={<Construction />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
