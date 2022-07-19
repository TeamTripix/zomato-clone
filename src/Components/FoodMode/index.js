import React from "react";
import "./style.scss";
function Index(props) {
  return (
    <div role="tab" className="foodModeBox">
      <div className="modeTypeBox">
        <div className="modeType">
          <img
            alt="illustration"
            src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
            loading="lazy"
          />
        </div>
        <div className="modeName">{props.modeName}</div>
      </div>
      <hr className="bottomLine"/>
    </div>
  );
}

export default Index;
