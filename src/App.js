import React, { Component } from 'react';
import Scroll from 'react-scroll';
import {Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

import demoScreen from './img/demo-screen-1.jpg';




class App extends Component {
  render() {
    return 
  }
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.toggle = this.toggle.bind(this);
    
    this.state = {
      collapse: true,
      status: "Closed",
      shrinkClass: "",
      layoutResponded: false
    };

    this.scrollOptions = {
      containerId: "containerElementID",
      activeClass: "active",
      spy: true,
      smooth: "easeInOutQuint",
      offset: -47.5,
      duration: 1000,
      isDynamic: true
    };
  }

  handleScroll(event) {
    this.setState((window.scrollY > 100) ? { shrinkClass: " navbar-shrink" } : { shrinkClass: "" });
  }

  scrollToTop(options) {
    Scroll.animateScroll.scrollToTop(options);
    if (!this.state.collapse) this.toggle();
  }

  scrollToBottom(options) {
    Scroll.animateScroll.scrollToTop(options);
    if (!this.state.collapse) this.toggle();
  }

  scrollToSection() {
    // Closes responsive menu when a scroll trigger link is clicked
    if (!this.state.collapse) this.toggle();
  }

  onOpened() {
    this.setState({ ...this.state, status: 'Opened' });
  }

  onClosed() {
    this.setState({ ...this.state, status: 'Closed' });
  }

  toggle() {
    const status = !this.state.collapse ? 'Opening...' : 'Closing...';
    this.setState({ collapse: !this.state.collapse, status });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    Scroll.scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
      <div className="App">

        {/*<!-- Navigation -->*/}
        <Navbar light fixed="top" className={"navbar-expand-lg" + this.state.shrinkClass} id="mainNav">
          <Container>
            <NavbarBrand onClick={() => this.scrollToTop(this.scrollOptions)} style={{cursor: "pointer"}}></NavbarBrand>
            <NavbarToggler right onClick={this.toggle} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!this.state.collapse} aria-label="Toggle navigation" style={{"fontFamily": "inherit"}}>
              Menu&nbsp;
              <i className="fa fa-bars"></i>
            </NavbarToggler>
            <Collapse navbar isOpen={!this.state.collapse} onOpened={this.onOpened} onClosed={this.onClosed} id="navbarResponsive">
              <Nav navbar className="ml-auto">
                <NavItem>
                <Scroll.Link to="scroll-download" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="nav-link" style={{cursor: "pointer"}}>About Melomania</Scroll.Link>
                </NavItem>
                <NavItem>
                  <Scroll.Link to="scroll-features" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="nav-link" style={{cursor: "pointer"}}>Features</Scroll.Link>
                </NavItem>
                <NavItem>
                  <Scroll.Link to="scroll-contact" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={-110} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="nav-link" style={{cursor: "pointer"}}>Sign Up</Scroll.Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <header className="masthead">
          <Container className="h-100">
            <Row className="h-100">
              <Col lg={7} className="my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5"><b>Melomania</b></h1>
                  <p><b>Livestreams. Marketplace. Discussion Boards / Forums.</b></p>
                  <Scroll.Link to="scroll-download" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="btn btn-outline btn-xl" style={{cursor: "pointer"}}>Learn More About Us!</Scroll.Link>
                </div>
              </Col>
              <Col lg={5} className="my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        {/*<!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->*/}
                        <img src={demoScreen} className="img-fluid" alt="" />
                      </div>
                      <div className="button">
                        {/*<!-- You can hook the "home button" to some JavaScript events or just remove it -->*/}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <Scroll.Element name="scroll-download" className="element">
          <section className="download bg-primary text-center" id="download">
              <Container>
                  <Row>
                    <Col md={8} className="mx-auto">
                      <h2 className="section-heading">Join your favorite music producers livestream. Browse the beat marketplace. Surf through forums and discussion boards!</h2>
                      <p>Sign up to be the first to know about the launch of Melomania and gain free Premium Access for 2 years.</p>
                      <p>Melomania will be fully released by the end of 2021.</p>
                      <Scroll.Link to="scroll-features" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="btn btn-outline btn-xl" style={{cursor: "pointer"}}>V</Scroll.Link>
                      <div className="badges">
                      </div>
                    </Col>
                  </Row>
              </Container>
          </section>
        </Scroll.Element>

        <Scroll.Element name="scroll-features" className="element">
          <section className="features" id="features">
            <Container>
                <div className="section-heading text-center">
                  <h2>Unlimited Features, Unlimited Fun</h2>
                  <p className="text-muted">Check out. what you can do  this app theme!</p>
                  <hr />
                </div>
                <Row>
                  <Col lg={4} className="my-auto">
                    <div className="device-container">
                      <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                          <div className="screen">
                            {/*<!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->*/}
                            <img src={demoScreen} className="img-fluid" alt="" />
                          </div>
                          <div className="button">
                            {/*<!-- You can hook the "home button" to some JavaScript events or just remove it -->*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} className="my-auto">
                    <Container fluid>
                      <Row>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-screen-smartphone text-primary"></i>
                            <h3>Device Mockups</h3>
                            <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-camera text-primary"></i>
                            <h3>Flexible Use</h3>
                            <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-present text-primary"></i>
                            <h3>Free to Use</h3>
                            <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-lock-open text-primary"></i>
                            <h3>Open Source</h3>
                            <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                          </div>
                          <div>
                          <Scroll.Link to="scroll-contact" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="btn btn-outline btn-xl" style={{cursor: "pointer"}}>Learn More About Us!</Scroll.Link>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
            </Container>
          </section>
         </Scroll.Element>

        <Scroll.Element name="scroll-contact" className="element">
          <section className="cta">
            <div className="cta-content">
                <Container>
                    <h2>Stop waiting.<br />Start building.</h2>
                                  
                    
                    

                    <a href="" className="btn btn-outline btn-xl">Sign Up Now!</a>
                    
                    
                </Container>
            </div>
            
            <div className="overlay"></div>
          </section>

          <section className="cta">
            <div className="cta-content">
                <Container>
                    <h2>Stop waiting.<br />Start building.</h2>
                                  
                    
                    

                    <a href="" className="btn btn-outline btn-xl">Sign Up Now!</a>
                    
                    
                </Container>
            </div>
            
            <div className="overlay"></div>
          </section>
               
          
        </Scroll.Element>

        <footer>
          <Container>
            <p>&copy; 2017 Start Bootstrap. All Rights Reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="">FAQ</a>
              </li>
            </ul>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
