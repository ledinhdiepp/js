import React, {Component} from 'react';
class Header extends React.Component{
  render(){
    return(
      // top bar chua dt // icon 
    
      <div className="container d-flex">
        <div className="logo mr-auto">
          <h1 className="text-light"><a href="index.html">TTD</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        </div>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="index.html">TRANG CHỦ</a></li>
            <li><a href="about.html">GIỚI THIỆU</a></li>
            <li><a href="services.html">DỊCH VỤ</a></li>
            <li><a href="portfolio.html">SẢN PHẨM</a></li>
            <li><a href="testimonials.html">THÀNH VIÊN</a></li>
            <li><Route path="/" component={Contact} />TIN TỨC</li>
            {/* <li className="drop-down"><a href>Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="drop-down"><a href="#">Drop Down 2</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                <li><a href="#">Drop Down 5</a></li>
              </ul>
            </li> */}
            <li><a href="Contact.js">LIÊN HỆ   </a></li>
            <li><a href="#" className="login"><i className="icofont-login" /> lOGIN</a></li>
            <li><a href="#" className="signout"><i className="icofont-sign-out" /> SIGN OUT</a></li>
          </ul>
        </nav>{/* .nav-menu */}
      </div>  
    );
  }
}

export default Header;