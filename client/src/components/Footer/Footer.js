import React from "react";
import foto from "../../assets/UCfooter.jpg";
import "./Footer.css";
import {
  FaFacebook,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div id="links">
          <a
            href="https://www.instagram.com/under.club.oficial/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>INSTAGRAM</h1>
          </a>
          <a
            href="https://www.facebook.com/1derclub"
            target="_blank"
            rel="noreferrer"
          >
            <h1>FACEBOOK</h1>
          </a>
          <a
            href="https://soundcloud.com/under-club"
            target="_blank"
            rel="noreferrer"
          >
            <h1>SOUNDCLOUD</h1>
          </a>
          <a href="https://ra.co/clubs/98071" target="_blank" rel="noreferrer">
            <h1>RESIDENT ADVISOR</h1>
          </a>
          <a
            href="https://www.youtube.com/c/UnderClubOficial"
            target="_blank"
            rel="noreferrer"
          >
            <h1>YOU TUBE</h1>
          </a>
        </div>
        <div id="location-footer">
          <h1>AV. CNEL. NICETO VEGA 5699</h1>
          <h1>1414, BUENOS AIRES</h1>
          <h1>ARGENTINA</h1>
        </div>
        <div></div>
        <div id="link-to-contact">
          <a
            href="/contact"
            rel="noreferrer"
          >
            <h1>ESCRIBINOS</h1>
          </a>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
        {/* <img src={foto} alt="foto-footer" /> */}
        {/* <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/1derclub"
              target="_blank"
              class=" brands fa-facebook-f "
            >
              <span className="label">
                <FaFacebook color="white"/>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/under.club.oficial"
              target="_blank"
              class="icon brands fa-instagram"
            >
              <span className="label">
                <FaInstagram color="white"/>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/under-club" 
              target="_blank"
              class="icon brands fa-soundcloud"
            >
              <span className="label">
                <FaSoundcloud color="white" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/UnderClubOficial"
              target="_blank"
              class="icon brands fa-youtube"
            >
              <span className="label">
                <FaYoutube color="white" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/under_club"
              target="_blank"
              class="icon brands fa-twitter"
            >
              <span className="label">
                <FaTwitter color="white"/>
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:joe.underclub@gmail.com"
              class="icon brands fa-mailbulk"
            >
              <span className="label">
                <FaMailBulk color="white" />
              </span>
            </a>
          </li>
        </ul> */}
      </footer>
    </>
  );
};

export default Footer;
