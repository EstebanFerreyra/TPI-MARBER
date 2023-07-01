import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ThemeContext } from "../context/Theme/Theme";
import ProfileCard from "../ProfileCard/ProfileCard";

import "./Profile.css";

const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <NavBar />
      <div>
        <div
          className={`profile-container ${
            theme === "dark" && "profile-container-dark"
          }`}
        >
          <ProfileCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
