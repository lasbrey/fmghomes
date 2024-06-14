import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { getProducts } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleTwo from "@/components/hero/styleTwo";
import AboutUsSectionOne from "@/components/aboutUs/aboutUsSectionOne";
import UpCommingcarousel from "@/components/upCommingCarousel";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import CallToAction from "@/components/callToAction";
import heroData from "@/data/hero/index-two.json";

function HomeVersionTwo(props) {
  const featureData = getProducts(featuresData, "buying", "renting", 3);

  return (
    <LayoutOne topbar={false}>
      <div className="ltn__slider-area ltn__slider-11 section-bg-1">
        <HeroSectionStyleTwo data={heroData} />
      </div>

      <div className="ltn__about-us-area pt-115 pb-100 ">
        <AboutUsSectionOne />
      </div>

      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        headingClasses=""
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />

      <div className="ltn__apartments-plan-area pb-70">
        <Container>
          <Row>
            <Col>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  subTitle: "Apartment Sketch",
                  title: "Apartments Plan",
                  additionalClassName: "",
                }}
              />

              <div className="ltn__apartments-tab-content-inner">
                <Row>
                  <Col xs={12} lg={6}>
                    <div className="apartments-plan-info section-bg-1">
                      <h2>The Studio</h2>
                      <p>
                        Enimad minim veniam quis nostrud exercitation ullamco
                        laboris. Lorem ipsum dolor sit amet cons aetetur
                        adipisicing elit sedo eiusmod tempor.Incididunt labore
                        et dolore magna aliqua. sed ayd minim veniam.
                      </p>
                      <div className="apartments-info-list apartments-info-list-color mt-40">
                        <ul>
                          <li>
                            <label>Total Area</label>
                            <span>2800 Sq. Ft</span>
                          </li>
                          <li>
                            <label>Bedroom</label>
                            <span>150 Sq. Ft</span>
                          </li>
                          <li>
                            <label>Bathroom</label>
                            <span>45 Sq. Ft</span>
                          </li>
                          <li>
                            <label>Belcony/Pets</label>
                            <span>Allowed</span>
                          </li>
                          <li>
                            <label>Lounge</label>
                            <span>650 Sq. Ft</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className="apartments-plan-img">
                      <img src="/img/others/10.png" alt="#" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="neighbour-area section-bg-1 pt-118 pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Explore Neighbour
                </h6>
                <h1 className="section-title">
                  What’s In Neighbour <br />
                  Explore Below
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__neighbour-tab-wrap">
                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-4 text-center">
                    <Nav>
                      <Nav.Link eventKey="first">
                        {" "}
                        <img src="/img/neighbour/1.jpg" alt="#" />
                      </Nav.Link>
                      <Nav.Link eventKey="second">
                        {" "}
                        <img src="/img/neighbour/2.jpg" alt="#" />
                      </Nav.Link>
                      <Nav.Link eventKey="third">
                        <img src="/img/neighbour/3.jpg" alt="#" />
                      </Nav.Link>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/1.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/3.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Shopping Center</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/2.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/2.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Medical Hospital</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/3.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/product-3/4.jpg" alt="#" />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Children Playland</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                <Row>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-mortarboard"></i> University /
                          College
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-hospital"></i> Medical Hospital
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="ltn__video-img alignleft">
                            <img
                              src="/img/bg/17.jpg"
                              alt="video popup bg image"
                            />
                            <button
                              className="ltn__video-icon-2 ltn__video-icon-2-small"
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </button>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-metro"></i> Railway Station
                        </Accordion.Header>
                        <Accordion.Body className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-building"></i> Shopping Mall
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-airplane"></i> Airport/Biman
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-slider"></i> Children Playland
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}

export default HomeVersionTwo;
