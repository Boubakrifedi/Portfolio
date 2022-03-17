import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
             if (logo.logo_path === undefined) {
              return (
                <OverlayTrigger
                  key={logo.skillName }
                  placement={"top"}
                  overlay={
                      <strong>{logo.skillName }</strong>
                  }>
                  <li className="software-skill-inline" name={logo.skillName }>
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname }
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              )}
            else{
              return(
                <OverlayTrigger
                key={logo.CustomerName}
                placement={"top"}
                overlay={
                    <strong>{logo.CustomerName}</strong>
                }>
                <li className="software-skill-inline" name={logo.CustomerName}>
                <img id="Customer" src={require(`../../assests/images/${logo.logo_path}`)}></img>
                </li>
                </OverlayTrigger>)
           
}})}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
