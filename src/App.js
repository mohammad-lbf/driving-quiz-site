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
import FirstRegulatinsTest from './tests-pages/FirstRegulatinsTest';
import SecondRegulationsTest from './tests-pages/SecondRegulationsTest';
import ThirdRegulationsQuestions from './tests-pages/ThirdRegulationsQuestions';
import AboutDeveloper from './components/main-pages/AboutDeveloper';
import Blog from './components/shared/Blog';

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
              <Route path="/aboutdeveloper" element={<AboutDeveloper />} />
              <Route path="/signs-test-1" element={<FirstSignsTest />} />
              <Route path="/signs-test-2" element={<SecondSignsTest />} />
              <Route path="/signs-test-3" element={<ThirdSignsTest />} />
              <Route path="/regulations-test-1" element={<FirstRegulatinsTest />} />
              <Route path="/regulations-test-2" element={<SecondRegulationsTest />} />
              <Route path="/regulations-test-3" element={<ThirdRegulationsQuestions />} />
              <Route path="/weblog/:slug" element={<Blog />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;