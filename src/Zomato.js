import React from "react";
import Navbar from "./Components/Navbar";
import FoodTypeCard from "./Components/FoodTypeCard";
import Collections from "./Components/Collections";
import Container from "@mui/material/Container";
import PopularLocation from "./Components/PopularLocation";
import GetApp from "./Components/GetApp";
import PopularRestaurant from "./Components/PopularRestaurant";
import Footer from "./Components/Footer";

function Zomato() {


  const cardData = [
    {
      image:
        "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
      name: "Order Food Online",
      url: "https://www.zomato.com/ncr/order-food-online?delivery_subzone=505",
    },
    {
      image:
        "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
      name: "Go out for a meal",
      url: "https://www.zomato.com/ncr/order-food-online?delivery_subzone=505",
    },
    {
      image:
        "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
      name: "Zomato Pro",
      url: "https://www.zomato.com/ncr/order-food-online?delivery_subzone=505",
    },
    {
      image:
        "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
      name: "Nightlife & Clubs",
      url: "https://www.zomato.com/ncr/order-food-online?delivery_subzone=505",
    },
  ];
  return (
    <>
      <Navbar />
      <Container>
        <div className="gridContainer">
          {cardData.map((card) => {
            return (
              <div className="gridItem">
                <FoodTypeCard
                  name={card.name}
                  image={card.image}
                  url={card.url}
                />
              </div>
            );
          })}
        </div>
        <Collections />
        <PopularLocation />
      </Container>
      <GetApp />
      <Container>
        <PopularRestaurant />
      </Container>
      <Footer />
    </>
  );
}

export default Zomato;
