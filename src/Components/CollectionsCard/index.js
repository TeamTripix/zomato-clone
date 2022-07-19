import React from "react";
import "./style.scss";

function index(props) {
  return (
    <>
      <div className="c-card">
        <img src={props.image_url} />
        <section>
          <div className="c-cardText">
            <p>{props.name}</p>
            <div style={{ display: "flex", fontSize: "2rem" }}>
              <h6>{props.place_no} Places</h6>
              <i size="10" color="#FFFFFF">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img">
                  <title>right-triangle</title>
                  <path d="M5 0.42l10 10-10 10v-20z"></path>
                </svg>
              </i>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default index;
