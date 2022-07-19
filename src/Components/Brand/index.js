import React from "react";
import "./style.scss";

function Index(props) {
  return (
    <>
      <div>
        <div
          className="brandBox"
          style={
            props.bgColor
              ? { backgroundColor: props.bgColor }
              : { backgroundColor: "#fff" }
          }>
          <img
            alt={props.name}
            src={props.image}
            loading="lazy"
            class="sc-s1isp7-5 fyZwWD"
          />
        </div>
        <h6 className="brandName">{props.name}</h6>
        <h6 className="brandFar">{props.time}</h6>
      </div>
    </>
  );
}

export default Index;
