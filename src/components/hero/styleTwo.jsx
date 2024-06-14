import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

function HeroSectionStyleTwo({ data }) {
  return (
    <div className="ltn__slider-11-inner position-relative">
      {data.map((item, key) => (
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11"
          key={key}
        >
          <div
            className={`ltn__slide-item-inner ${
              item.variationLeft ? "text-right text-end" : ""
            }`}
          >
            <Container className="container">
              <Row className="row">
                <Col xs={12} className="align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner">
                      <h6 className="slide-sub-title animated">
                        <span>
                          <FaHome />
                        </span>
                        {item.subtitle}
                      </h6>
                      <h1 className="slide-title animated">
                        {item.Title}
                      </h1>
                      <div className="slide-brief animated">
                        <p>{item.Desc}</p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          href="/about"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          {item.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`slide-item-img ${
                      item.variationLeft ? "slide-img-left" : ""
                    }`}
                  >
                    <img src={`/img/slider/${item.heroimage}`} alt="#" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSectionStyleTwo;
