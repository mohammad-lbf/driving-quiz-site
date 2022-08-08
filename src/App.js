import React from 'react';
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

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="main-app">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/weblog" element={<Weblog />} />
              <Route path="/aboutproject" element={<AboutProject />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/signs-test-1" element={<FirstSignsTest />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;