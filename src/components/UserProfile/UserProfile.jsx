import React from "react";
import "./UserProfile.css";

function UserProfile({ userDetails }) {
  return (
    <>
      <div className="user-profile">
        <div className="cardProfile">
          <img
            src={userDetails.picture}
            alt={`${userDetails.given_name}'s profile`}
            className="profile-pic"
          />
          <p>Welcome</p>
          <h1 className="name">{userDetails.name}</h1>
          <p className="email">{userDetails.email}</p>
          {/* <p className="locale">{`Locale: ${userDetails.locale}`}</p> */}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
