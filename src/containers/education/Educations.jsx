import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;
  
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={3000} distance="100px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme}  key={degree.subtitle}/>;
        })}
      </div>
    </div>
  );
}

export default Educations;
