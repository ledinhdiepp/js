import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>TTD</h3>
                <p>
                  Khu phố 6, phường Linh Trung, Quận Thủ Đức <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> ttd@example.com<br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">GIỚI THIỆU</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">ĐỊCH VỤ</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">SẢN PHẨM</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">THÀNH VIÊN</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>SẢN PHẨM</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">KAKI</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">LỤA TƠ TẰM</a></li>
                  
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our TTD</h4>
               
                <form action method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              © Copyright <strong><span>TTD</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flattern-multipurpose-bootstrap-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
        </div>
            </div>
        );
    }
}

export default Footer;