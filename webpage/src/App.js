import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';

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
