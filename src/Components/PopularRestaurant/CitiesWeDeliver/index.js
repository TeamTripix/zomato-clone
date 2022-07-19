import React from 'react'
import resData from "../../../data.json"
function Index() {
    const data = resData.cities_to_dilever
    return (
        <>
          <div className="restaurantChains">
            <h2>Cities We Deliver To</h2>
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

export default Index