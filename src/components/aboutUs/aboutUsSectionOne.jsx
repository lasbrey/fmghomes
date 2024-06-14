import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionOne() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="/img/others/11.png" alt="About Us Image" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Leading the Way in Land Banking and Real Estate Management
                </h1>
                <p>
                  Our extensive team of dedicated professionals is committed to delivering
                  comprehensive solutions in land banking and real estate
                  management. Our global reach and specialized services
                  guarantee optimal results for our clients.
                </p>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-4"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Comprehensive Land Banking Solutions
                    </Link>
                  </h4>
                  <p>
                    Our land banking system offers secure and profitable
                    investment opportunities. We manage your land assets with
                    expertise and precision.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-call-center-agent"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Expert Real Estate Management
                    </Link>
                  </h4>
                  <p>
                    Our team of global real estate experts provides top-notch
                    management services to ensure your investments are optimized
                    and secure.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-maps-and-location"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Strategic Land Acquisition
                    </Link>
                  </h4>
                  <p>
                    We provide strategic land acquisition services to help you
                    find the best locations for your real estate investments,
                    ensuring long-term growth and profitability.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionOne;
