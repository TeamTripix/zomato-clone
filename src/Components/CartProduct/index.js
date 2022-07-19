import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { removeFromCart, addTotalPrice } from "../../action";

function Index(props) {
  const { food_type, image_url, price, restaurant_name, id } =
    props.data.cardData;
  const exectPrice = parseInt(props.data.quantity) * parseInt(price);
  const [totalPrice, setTotalPrice] = useState(exectPrice);
  const [orderNo, setOrderNo] = useState(props.data.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTotalPrice(totalPrice))
  }, [totalPrice])
  

  const add = () => {
    setTotalPrice(parseInt(totalPrice) + parseInt(price));
    setOrderNo(orderNo + 1);
  };

  const subtract = () => {
    if (orderNo === 1) {
    } else {
      setTotalPrice(totalPrice - price);
      setOrderNo(orderNo - 1);
    }
  };

  return (
    <>
      <div className="productList">
        <div className="product">
          <div className="productDesc">
            <img src={image_url} />
            <div className="productName">
              <h1>{restaurant_name}</h1>
              <p>{food_type}</p>
            </div>
          </div>
          <div className="quantity">
            <div onClick={subtract} className="minus">
              -
            </div>
            <div className="productQuantity">{orderNo}</div>
            <div onClick={add} className="plus">
              +
            </div>
          </div>
          <div className="totalPrice">₹{totalPrice}</div>
          <div className="removeProduct">
            <i
              onClick={() => {
                dispatch(removeFromCart({ id: id }));
              }}
              size="24"
              color="#1C1C1C"
              tabindex="0"
              aria-label="close Modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img">
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
