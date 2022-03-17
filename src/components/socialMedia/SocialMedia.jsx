import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="social-media-div">
      <a
        // href={socialMediaLinks.github}
        className="icon-button github"
        onClick={() => openRepoinNewTab(socialMediaLinks.github)}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        // href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        onClick={() => openRepoinNewTab(socialMediaLinks.linkedin)}
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        // href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        onClick={() => openRepoinNewTab ('mailto:${socialMediaLinks.gmail}')}
      >
        <i className="fab fa-google"></i>
      </a>
      <a
        // href={socialMediaLinks.instagram}
        className="icon-button instagram"
        onClick={() => openRepoinNewTab(socialMediaLinks.instagram)}
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
}
