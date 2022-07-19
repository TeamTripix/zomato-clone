import React from "react";
import "./style.scss";
import resData from "../../../data.json"

function index() {
  const data = resData.top_restaurant_chains
  return (
    <>
      <div className="restaurantChains">
        <h2>Top Restaurant Chains</h2>
        <div className="gridBox-restaurantChains">
          {data.map((data) => {
            return (
              <div className="gridItem-restaurantChains">
                <a href="#">{data.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default index;
