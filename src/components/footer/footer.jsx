import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={4}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <img src="/img/logo.png" alt="Logo" /> */}
                      <img src="/img/logo-2.png" alt="Logo" />
                    </div>
                  </div>
                  <p>
                    FMG Homes is committed to providing exceptional real estate
                    services. We offer a wide range of properties and dedicated
                    support to ensure your satisfaction.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>No 11 Dakala Street Wuse 2 Abuja</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+2348052551000">
                              +234 80 5255 1000
                            </Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:info@fmghomes.com">
                              info@fmghomes.com
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link
                          href="https://facebook.com/fmghomes"
                          title="Facebook"
                        >
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/fmghomes"
                          title="Twitter"
                        >
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://linkedin.com/company/fmghomes"
                          title="LinkedIn"
                        >
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://youtube.com/fmghomes"
                          title="YouTube"
                        >
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      {/* <li>
                        <Link href="/properties">All Properties</Link>
                      </li>
                      <li>
                        <Link href="/locations">Locations</Link>
                      </li> */}
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu">
                    <ul>
                      {/*  <li>
                        <Link href="/order-tracking">Order Tracking</Link>
                      </li> */}
                      <li>
                        <Link href="/privacy">Privacy Policy</Link>
                      </li>
                      {/*<li>
                        <Link href="/login">Login</Link>
                      </li>
                      <li>
                        <Link href="/my-account">My Account</Link>
                      </li> */}
                      <li>
                        <Link href="/terms">Terms & Conditions</Link>
                      </li>
                      {/* <li>
                        <Link href="/offers">Promotional Offers</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </Col>
             
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>
                    All Rights Reserved @ FMG Homes{" "}
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
