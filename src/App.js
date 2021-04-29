import React from 'react';
import './App.css';
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Post from './components/Post'
function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all/:category" component={Home} exact />
        <Route path="/post/:id" component={Post} exact />
       <Route path="*" component= {NotFound} />
      </Switch>
      <Footer/>
    </React.Fragment>
  </BrowserRouter>
  );
}

export default App;
