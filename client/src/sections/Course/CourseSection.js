import React from "react";
import { BiTime, BiCodeBlock } from "react-icons/bi";

//CSS
import "./CourseSection.css";

function CourseSection() {
  return (
    <div className="courseMainDiv">
      <div className="courseHeadingDiv">
        <h5>Explore our courses</h5>
      </div>
      <div className="courseDataDiv">
        <h6>Recommended courses</h6>
        <div className="courseDataMainDiv">
          <div className="courseDataOne">
            <div className="courseTitleDiv">
              <div className="courseTitleLeft">
                <p>Full Stack</p>
                <div>MERN Stack</div>
              </div>
              <div className="courseTitleRight">
                <img
                  src="https://res.cloudinary.com/soubhagyadas/image/upload/v1691171345/MERN_zmpauq.png"
                  alt=""
                  className="courseImage"
                />
              </div>
            </div>
            <div className="courseMetaDataDiv">
              <div className="courseDurationDiv">
                <div>
                  <span>
                    <BiTime size={20} />
                  </span>
                  140+ Hours
                </div>
              </div>
              <div className="courseProjectDiv">
                <div>
                  <span>
                    <BiCodeBlock size={20} />
                  </span>
                  2+ Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
