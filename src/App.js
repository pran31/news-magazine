import React from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {DataProvider} from "./components/DataProvider";
import DetailedNews from './components/DetailedNews';
import Footer from './components/Footer';
import ArticleSearch from './components/ArticleSearch';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <DataProvider>
    <div className="App">
    <Router>
      <Header />
      <section>
      <Routes>
      <Route path="/" element={<NewsCard /> }/>
      <Route path="/:id" element={<DetailedNews /> }/>
      <Route path="article" element={<ArticleSearch /> }/>
      <Route path="contact" element={<ContactUs /> }/>
      </Routes>
      </section>
  
      <Footer />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
