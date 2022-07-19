import { Container } from "@mui/material";
import React from "react";
import Searchbar from "../Searchbar";
import "./style.scss";
import FoodMode from "../FoodMode";
import Filter from "../Filter";
import Brand from "../Brand";
import resData from "../../data.json";
import FoodCard from "../FoodCard";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import SignUp from "../SignUp";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import MyCart from "../MyCart";

function Index() {
  const brandName = resData.brandName;
  const data = resData.food_card;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/dashboard");
  };
  return (
    <>
      <Container>
        <div className="header">
          <div className="headerLogo">
            <Link to="/">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                tabindex="0"
                class="sc-yvzia9-6 hxTfPc"
              />
            </Link>
            <Searchbar />
          </div>
          <div className="headerLinks">
            {localStorage.getItem("login") ? (
              <>
                <MyCart />
                <li onClick={handleLogout}>Log out</li>
              </>
            ) : (
              <>
                <li>
                  <Login
                    navbar={true}
                    navigate={"/dashboard"}
                    color="rgb(105, 105, 105)"
                  />
                </li>
                <li>
                  <SignUp navbar={true} color="rgb(105, 105, 105)" />
                </li>
              </>
            )}
          </div>
        </div>
        <div className="breadcum">
          <a href="#">Home</a>
          <p> / </p>
          <a href="#">India</a>
          <p> / </p>
          <a href="#">Delhi NCR</a>
          <p> / </p>
          <a href="#">South Delhi</a>
        </div>
        <div style={{ display: "flex" }}>
          <FoodMode modeName="Delivery" />
        </div>
        <div className="filterBox">
          <Filter name="Filter" logo={true} />
          <Filter name="Great Offers" />
          <Filter name="Delivery Time" />
          <Filter name="Pure Veg" />
          <Filter name="Rating: 4.0+" />
          <Filter name="Cuisines" />
        </div>
        <h2 className="brandHeading">Top brands for you</h2>
        <div className="brandGridBox">
          {brandName.map((data) => {
            return (
              <div key={data.name} className="brandGridItem">
                <Brand
                  name={data.name}
                  image={data.image}
                  time={data.time}
                  bgColor={data.bgColor}
                />
              </div>
            );
          })}
        </div>
        <h1 className="foodCardHeading">Delivery Restaurants in Delhi</h1>
        <div className="resBoxGrid">
          {data.map((data) => {
            return (
              <div>
                <FoodCard
                  restaurant_name={data.restaurant_name}
                  image_url={data.image_url}
                  food_type={data.food_type}
                  rating={data.rating}
                  price={data.price}
                  recent_order={data.recent_order}
                  id={data.id}
                />
              </div>
            );
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Index;
