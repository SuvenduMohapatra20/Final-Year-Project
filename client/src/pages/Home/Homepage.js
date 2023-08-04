import React from "react";

//CSS
import "./Homepage.css";

//Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Sections
import CourseSection from "../../sections/Course/CourseSection";
import CommitmentSection from "../../sections/Comitment/CommitmentSection";

function Homepage() {
  return (
    <div className="container-fluid homePageContainerDiv">
      <Header />
      <section className="container homeHeaderSection">
        <div className="headerLeftSection">
          <p className="headerLargeText">
            We will provide and guide the final year projects for you
          </p>
          <p className="headerSmallText">
            We create reliable projects in a variety of programming languages
            and also offer source code, reports, and pdf and ppt files.
          </p>
          <div className="startNowButton customBtn">Start Now</div>
        </div>
        <div className="headerRightSection">
          <img
            src="https://res.cloudinary.com/soubhagyadas/image/upload/v1687358240/Rectangle_3_k349sp.png"
            alt=""
            className="headerSectionImage"
          />
        </div>
      </section>
      <section className="container courseMainSectionDiv">
        <CourseSection />
      </section>
      <section className="container commitmentMainSectionDiv">
        <CommitmentSection />
      </section>
    </div>
  );
}

export default Homepage;
