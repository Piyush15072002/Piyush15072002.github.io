
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index.js';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}></Route>

      </Routes>
    </>
  );
}

export default App;
