
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Research from './components/Research';
import Workexp from './components/Workexp';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />}></Route>

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="education" element={<Education />} />

          <Route path="research" element={<Research />} />

          <Route path="workexp" element={<Workexp />} />

          <Route path="skills" element={<Skills />} />

        </Route>



      </Routes>
    </>
  );
}

export default App;
