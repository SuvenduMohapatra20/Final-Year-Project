import React from "react";

//CSS
import "./Homepage.css";

//Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Sections
import HeaderDataSection from "../../sections/HeaderData/HeaderDataSection";

function Homepage() {
  return (
    <div className="container-fluid homePageContainerDiv">
      <Header />

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
