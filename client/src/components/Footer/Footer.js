import React from "react";
import { AiFillCode } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaDiscord, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

//CSS
import "./Footer.css";

function Footer() {
  const footerLogoSize = 20;
  return (
    <div className="footerDiv">
      <div className="footerDataDiv">
        <div className="footerLeft">
          <div className="footerLeftOne">
            <div className="footerLeftLogo">
              <AiFillCode size={40} />
              <span>
                <b>Project</b>Ninja
              </span>
            </div>
            <span>soubhagya801832@gmail.com</span>
          </div>
          <div className="footerLeftTwo">
            <p>MCA Projects - Robust code & get personalized guidance</p>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerRightOne">
            <p>Media</p>
          </div>
          <div className="footerRightTwo">
            <Link>
              <FaDiscord size={footerLogoSize} />
            </Link>
            <Link>
              <FaInstagram size={footerLogoSize} />
            </Link>
            <Link>
              <FaGithub size={footerLogoSize} />
            </Link>
            <Link>
              <FaLinkedin size={footerLogoSize} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footerTextCopy">
        <p>© Copyright 2023. Made by Soubhagya</p>
      </div>
    </div>
  );
}

export default Footer;
