import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Index(props) {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/dashboard">
        <div className="card">
          <div className="cardImage">
            <img src={props.image} />
          </div>
          <div className="cardText">
            <p className="cardTitle">{props.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Index;
