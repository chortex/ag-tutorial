import React from 'react';
import './App.css';
import 'bootswatch/dist/yeti/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollTop from './Components/ScrollTop';

function App() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;
