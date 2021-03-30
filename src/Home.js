import React, { Component } from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Ctasection from './components/Ctasection';
import Services from './components/Services';
import Fortfolio from './components/Portfolio';
import Client from './components/Client';

class Home extends Component {
    render() {
        return (
            <div>
               

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
            </div>
        );
    }
}

export default Home;