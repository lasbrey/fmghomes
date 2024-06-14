import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Link from "next/link";

const AboutUsStyleOne = ({ sectionSpace }) => {

  return (
    <>
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    The Leading Real Estate Rental Marketplace.<span></span>
                  </h1>
                  <p>
                    We are dedicated to redefining the real estate experience
                    with a global presence and specialized services tailored to
                    meet your needs. Our team of over 39,000 professionals spans
                    across 70 countries, ensuring exceptional service and
                    unparalleled expertise.
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Smart Home Design
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Beautiful Scene Around
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Exceptional Lifestyle
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Complete 24/7 Security
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Our commitment to excellence drives us to create spaces
                    where innovation meets comfort, ensuring every client
                    finds their perfect place to call home.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link href="/service">
                    <p className="theme-btn-1 btn btn-effect-1">OUR SERVICES</p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUsStyleOne;
