import React from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Ctasection from './components/Ctasection';
import Services from './components/Services';
import Footer from './components/Footer';
import Fortfolio from './components/Portfolio';
import Client from './components/Client';

class App extends React.Component{
  render(){
    return(
      
    <div className="_0123">
      <section id="topbar" className="d-none d-lg-block">
        <Topbar/>
      </section>

      <header id="header">
        <Header/>
      </header>

      <section id="hero">
        <Hero/>
      </section>

      <section id="cta" class="cta">
        <Ctasection/>
      </section>

      <section id="services" class="services">
        <Services/>
      </section>

      <section id="portfolio" class="portfolio">
        <Fortfolio/>
      </section>

      <section id="clients" class="clients">
        <Client/>
      </section>
      <footer id="footer">
        <Footer/>
      </footer>
    </div>
    
      
    
    );
  }
}

export default App;
