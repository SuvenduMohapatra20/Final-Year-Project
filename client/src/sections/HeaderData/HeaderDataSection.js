import React from "react";

//CSS
import "./HeaderDataSection.css";

function HeaderDataSection() {
  return (
    <div className="container homeHeaderSection">
      <div className="headerLeftSection">
        <p className="headerLargeText">
          We will provide and guide the final year projects for you
        </p>
        <p className="headerSmallText">
          We create reliable projects in a variety of programming languages and
          also offer source code, reports, and pdf and ppt files.
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
    </div>
  );
}

export default HeaderDataSection;
