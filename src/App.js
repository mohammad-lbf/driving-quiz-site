import React , {useState} from 'react';
import HambergurMenuModal from './components/HambergurMenuModal';
import { Provider } from 'react-redux';
import Header from './components/layout/Header';
import store from './Redux/store';
import FirstSignsTest from './tests-pages/firstSignsTest';
import './App.css';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/main-pages/HomePage';
import Weblog from './components/main-pages/Weblog';
import AboutProject from './components/main-pages/AboutProject';
import AboutUs from './components/main-pages/AboutUs';
import SecondSignsTest from './tests-pages/SecondSignsTest';
import ThirdSignsTest from './tests-pages/ThirdSignsTest';

const App = () => {
  const[open , setOpen] = useState(false);
  return (
    <Provider store={store}>
      <div>
        <Header open={open} setOpen={setOpen} />
        <HambergurMenuModal open={open} setOpen={setOpen} />
        <div className="main-app">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/weblog" element={<Weblog />} />
              <Route path="/aboutproject" element={<AboutProject />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/signs-test-1" element={<FirstSignsTest />} />
              <Route path="/signs-test-2" element={<SecondSignsTest />} />
              <Route path="/signs-test-3" element={<ThirdSignsTest />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;