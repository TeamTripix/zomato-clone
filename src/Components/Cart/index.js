import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Container } from "@mui/material";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../action/index";

export default function Index(props) {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(parseInt(props.data.price));
  const [orderNo, setOrderNo] = useState(1);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const add = () => {
    setPrice(price + parseInt(props.data.price));
    setOrderNo(orderNo + 1);
  };

  const subtract = () => {
    if (orderNo === 1) {
    } else {
      setPrice(price - parseInt(props.data.price));
      setOrderNo(orderNo - 1);
    }
  };

  const handleOrder = (orderData) => {
    if (localStorage.getItem("login")) {
      let objectData = {
        cardData: orderData.cardData,
        quantity: orderData.quantity,
      };
      dispatch(addtoCart(objectData));
      handleClose();
    } else {
      alert("please Login first");
    }
  };

  return (
    <div>
      <button className="orderBtn" variant="outlined" onClick={handleClickOpen}>
        Order
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <Container>
          <div className="orderTitle">
            <h2>DUNKIN</h2>
            <div onClick={handleClose} className="crossIcon">
              <i
                class="sc-rbbb40-1 eDwwcN sc-re4bd0-1 btYpry"
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
                  role="img"
                  class="sc-rbbb40-0 fmIpur">
                  <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div className="divisionOrderForm"></div>
          <div className="orderMsg">
            <h1>Choice of 1st Donut</h1>
            <p>You can choose any 1 option</p>
          </div>
          <form style={{ marginTop: "2rem" }}>
            <div className="radioInputBox">
              <h1>Death By Choco</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Alive By Choco</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input checked="checked" name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Breakup Party Eclair</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Rainbow Pop</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Choco pop</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Cookie By Wheel</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Very Very Strawberry</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
            <div className="radioInputBox">
              <h1>Choco Overdose</h1>
              <div className="radioInput">
                <p>₹229</p>
                <input name="foodPrice" type="radio" />
              </div>
            </div>
          </form>
        </Container>
        <div className="subTotal">
          <div className="addToggleButton">
            <h1 onClick={subtract}>-</h1>
            <p style={{ fontSize: "1.5rem", color: "black" }}>{orderNo}</p>
            <h1 onClick={add}>+</h1>
          </div>
          <Button
            fullWidth
            sx={{
              marginLeft: "1rem",
              textTransform: "none",
              borderRadius: "0.6rem",
              fontSize: "1.5rem",
              backgroundColor: "rgb(239, 79, 95)",
              "&:hover": {
                background: "rgb(224, 53, 70)",
              },
            }}
            variant="contained"
            onClick={() =>
              handleOrder({ cardData: props.data, quantity: orderNo })
            }
            // onClick={handleOrder}
          >
            Add to cart ₹{price}
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
