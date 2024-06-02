import React from "react";
import { Carousel } from "react-bootstrap";
import logo from "../../assets/Logo.png";
import styles from "./Carousel.module.css";
import RRRImg from "../../assets/RRRImg.jpg";
import imageStream from "../../assets/imageStream.jpeg";
import HpImg from "../../assets/HpImg.jpg";

const MyCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={imageStream} alt="First slide" />
        {/* <Carousel.Caption className={styles.CarCaption}>
          <h3>First Slide</h3>
          <p>This is the first slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={RRRImg} alt="Second slide" />
        {/* <Carousel.Caption className={styles.CarCaption}>
          <h3>Second Slide</h3>
          <p>This is the second slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={HpImg} alt="Third slide" />
        {/* <Carousel.Caption className={styles.CarCaption}>
          <h3>Third Slide</h3>
          <p>This is the third slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
