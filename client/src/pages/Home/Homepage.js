import React from "react";

//CSS
import "./Homepage.css";

//Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Sections
import HeaderDataSection from "../../sections/HeaderData/HeaderDataSection";
import Navbar from "../../components/Navbar/Navbar";


function Homepage() {
  return (
    <div className="homePageContainerDiv">
      <Navbar />

      {/* Header Section  */}

      <section className="homeHeaderMainSection">
        <HeaderDataSection />
      </section>

      {/* Header Section  */}
      {/* Course or Project Section  */}
    </div>
  );
}

export default Homepage;
