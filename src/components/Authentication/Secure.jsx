import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import MainPage from "../MainPage";
import NavbarComp from "../Navbar/NavbarComp";

export default function Secure() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  const getUserDetails = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    );
    const data = await response.json();
    setUserDetails(data);
    sendUserDetailsToBackend(data);
  };

  const sendUserDetailsToBackend = async (userDetails) => {
    try {
      const { name, email } = userDetails;

      const userData = { name, email };

      const response = await fetch("http://localhost:8080/user-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to send user details to backend");
      }

      console.log("User details sent successfully");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      navigate("/");
    }

    getUserDetails(accessToken);
  }, [navigate]);

  return (
    <>
      {userDetails ? (
        <>
          <NavbarComp userDetails={userDetails} />
          <MainPage />
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}
