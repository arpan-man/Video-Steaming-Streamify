import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import imageStream from "../../assets/imageStream.jpeg";
import Logo from "../../assets/Logo.png";
import kidsImage from "../../assets/kidsImage.png";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleClick = () => {
    const callbackUrl = `${window.location.origin}`;
    const googleClientId =
      "566026556437-aurgaofmu339lodv5cf845c498lhh092.apps.googleusercontent.com";
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/secure");
    }
  }, [isLoggedin, navigate]);

  return (
    <>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={Logo}
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "30px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button variant="outline-success" onClick={handleClick}>
                SignIn
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="sectionFirst">
        <div className="overlay"></div>
        <Container>
          <div className="text-box">
            <h2>Endless Entertainment, One Click Away</h2>
            <div className="text-box">
              <p>Expand your horizons with our diverse range of content.</p>
            </div>
            <div className="text-box">
              <p>
                Join now and experience the convenience of unlimited streaming
                at your fingertips.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="section Secondsection">
        <Container>
          <div className="section-content">
            <div className="image-box">
              <img src={imageStream} alt="Image 2" />
            </div>
            <div className="text-box">
              <h2>Watch Here</h2>
              <p>
                Stream a wide selection of movies, TV shows, and documentaries
                on demand. Explore our curated collection of entertainment and
                dive into captivating stories from around the world. Start
                watching now!
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="section Thirdsection">
        <Container>
          <div className="section-content">
            <div className="text-box">
              <h2>Content for kids</h2>
              <p>
                Discover family-friendly entertainment with our collection of
                kid-approved movies and TV series. From animated adventures to
                educational content, find something fun and safe for children of
                all ages to enjoy.
              </p>
            </div>
            <div className="image-box">
              <img src={kidsImage} alt="Image 3" />
            </div>
          </div>
        </Container>
      </div>
      <div className="custom-accordion">
        <h2>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Is my personal information secure on your website?
            </Accordion.Header>
            <Accordion.Body>
              We take user privacy and data security seriously. Your personal
              information is encrypted and stored securely according to industry
              standards. For more details, please refer to our Privacy Policy.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How often do you update your video library?
            </Accordion.Header>
            <Accordion.Body>
              We regularly update our video library with new titles and content.
              You can expect fresh additions to our catalog on a weekly or
              monthly basis.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <footer className="footer">
        <Container>
          <div className="footer-content">
            <div className="footer-section">
              <p style={{ fontSize: "17px" }}>
                Explore a world of entertainment with our diverse collection of
                videos. Discover new movies, TV shows, and documentaries! <br />
                | Copyright © 2024 Streamify |
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
