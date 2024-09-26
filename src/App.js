import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import Footer from './Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Home/>} />
    //     <Route path='/projects' element={<Projects/>} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;