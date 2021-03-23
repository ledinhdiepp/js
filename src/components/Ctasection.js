import React, { Component } from 'react';

class Ctasection extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3>We've created more than <span>200 websites</span> this year!</h3>
                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">Request a quote</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Ctasection;