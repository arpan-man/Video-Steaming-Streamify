import React from "react";
import NavbarComp from "./Navbar/NavbarComp";
import Playlist from "./Playlist";
import Carousel from "./CarouselComp/Carousel";

function MainPage() {
  return (
    <>
      <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        {/* <NavbarComp></NavbarComp> */}
        <Carousel></Carousel>
        <Playlist />
      </div>
    </>
  );
}

export default MainPage;
