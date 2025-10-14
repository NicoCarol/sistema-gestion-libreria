import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Header />} />
    //     {/* <Route path='/aboutme' element={<AboutMe />} />
    //     <Route path='/projects' element={<Projects />} />
    //     <Route path='/contact' element={<Contact />} /> */}
    //   </Routes>
    // </BrowserRouter>
    <>
      <Layout />
    </>
  );
}

export default App;
