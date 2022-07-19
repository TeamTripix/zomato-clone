import React from "react";
import "./style.scss";
import resData from "../../../data.json";

function Index() {
  const data = resData.popular_restaurant;
  return (
    <>
      <div className="cuisinesHeading">
        <p>
          {data.map((data) => {
            return (
              <>
                {data.name}
                <span className="dot"></span>
              </>
            );
          })}
        </p>
      </div>
    </>
  );
}

export default Index;
