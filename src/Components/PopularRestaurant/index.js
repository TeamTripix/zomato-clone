import React from "react";
import "./style.scss";
import Cuisines from "./Cuisines";
import RestaurantTypes from "./RestaurantTypes";
import RestaurantChains from "./RestaurantChains";
import CitiesWeDeliver from "./CitiesWeDeliver"

function Index() {
  return (
    <>
      <div className="boxHeading">
        {/* <h1>Explore other options for you here</h1> */}
        {/* <Cuisines
          heading={"Popular cuisines near me"}
          data={
            "Bakery food near me . Beverages food near me . Biryani food near me . Burger food near me . Chinese food near me . Continental food near me . Desserts food near me . Ice Cream food near me . Italian food near me . Kebab food near me . Mithai food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rolls food near me . Sandwich food near me . Shake food near me . South Indian food near me . Street food near me"
          }
        /> */}
        <h1>Popular restaurant types near me</h1>
        <Cuisines />
        <RestaurantChains />
        <CitiesWeDeliver />
      </div>
    </>
  );
}

export default Index;
