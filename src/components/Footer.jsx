import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCopyright,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#1d212f",
        display: "flex",
        flexDirection: "column",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-white fs-5">Our Socials Links</h2>
          <div className="d-flex justify-content-center align-items-center">
            <a
              href="https://www.facebook.com/powerlearnproject/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x text-white"></i>
              <AiFillFacebook className="text-white" />
            </a>
            <a
              href="https://twitter.com/powerlearnproj"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-2x text-white"></i>
              <AiFillTwitterCircle className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/powerlearnproject/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-2x text-white"></i>
              <AiFillLinkedin className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex col text-white justify-content-center align-items-center">
        <div className="">
          <span>
            <AiOutlineCopyright />
            Copyright {new Date().getFullYear()}
          </span>
        </div>
        <br />

        <div className="ml-2">
          <span role="img" aria-label="love">
            Made by CHESERET😂💖
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
