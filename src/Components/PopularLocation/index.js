import React from "react";
import "./styles.scss";
import Location from "./Location";
import data from "../../data.json"

function Index() {
    const popularCity = data.popular_city
  return (
    <>
      <div className="title">
        <p>Popular localities in and around Delhi NCR</p>
      </div>
      <div className="gridBox">
        {popularCity.map((data) => {
          return (
            <div className="gridBoxItem">
              <Location name={data.name}/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Index;
