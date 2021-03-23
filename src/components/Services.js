import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2> <strong>MỘT SỐ DỊCH VỤ NỔI BẬT CỦA CTY</strong></h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i className="icofont-computer" /></div>
              <h4 className="title"><a href>CHO VAY NẶNG LÃI</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon"><i className="icofont-chart-bar-graph" /></div>
              <h4 className="title"><a href>ĐÂM THUÊ CHÉM MƯỚN</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon"><i className="icofont-earth" /></div>
              <h4 className="title"><a href>MUA BÁN MẠI DÂM,MA TÚY</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon"><i className="icofont-image" /></div>
              <h4 className="title"><a href>HACKER NGẦM</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon"><i className="icofont-settings" /></div>
              <h4 className="title"><a href>RỬA TIỀN</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon"><i className="icofont-tasks-alt" /></div>
              <h4 className="title"><a href>ĐÒI NỢ THUÊ</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>
      </div> 

      
        );
    }
}

export default Services;