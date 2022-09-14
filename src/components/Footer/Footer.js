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
        <img src={foto} alt="foto-footer" />
        <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/1derclub"
              target="_blank"
              class=" brands fa-facebook-f "
            >
              <span class="label">
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
              <span class="label">
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
              <span class="label">
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
              <span class="label">
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
              <span class="label">
                <FaTwitter color="white"/>
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:joe.underclub@gmail.com"
              class="icon brands fa-mailbulk"
            >
              <span class="label">
                <FaMailBulk color="white" />
              </span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
