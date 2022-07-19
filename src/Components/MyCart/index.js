import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CartProduct from "../CartProduct";
import "./style.scss";
import { checkOut, alert } from "../../action";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../Alert";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const cartData = useSelector((state) => state.addtoCart.list);
  const checkOutPrice = useSelector((state) => state.addTotalPrice);
  const alertData = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckOut = () => {
    handleClose();
    dispatch(checkOut());
    dispatch(
      alert({
        status: true,
        message: "Thank you for your Order",
        behaviour: "success",
      })
    );
  };

  return (
    <>
      <div>
        <li className="myCartBtn" variant="outlined" onClick={handleClickOpen}>
          My cart
        </li>
        <Dialog
          maxWidth="lx"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <div className="dailogBox">
            <DialogTitle id="alert-dialog-title">
              <div className="cartHeading">
                <h1>My Cart</h1>
                <div onClick={handleClose} className="crossIcon">
                  <i
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
              <div className="cartHeader">
                <h1 style={{ marginLeft: "10rem" }}>Description</h1>
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Remove</h1>
              </div>
            </DialogTitle>
            <div className="division"></div>
            {cartData.length === 0 ? (
              <div
                style={{
                  padding: "0rem 2rem",
                  minHeight: "22rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3.2rem",
                  color: "dimgray",
                }}>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                <div style={{ padding: "0rem 2rem", minHeight: "22rem" }}>
                  {cartData.map((data) => {
                    return <CartProduct data={data.data} />;
                  })}
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div className="priceCalculation">
                    <div className="priceBox">
                      <div className="priceBoxContent">
                        <p>Discount</p>
                        <h1>₹0</h1>
                      </div>
                    </div>
                    <div className="priceBox">
                      <div className="priceBoxContent">
                        <p>Delivery</p>
                        <h1>₹0</h1>
                      </div>
                    </div>
                    <div className="priceBox">
                      <div className="priceBoxContent">
                        <p>Subtotal</p>
                        <h1>₹{checkOutPrice}</h1>
                      </div>
                    </div>
                    <div className="priceBox">
                      <div className="priceBoxContent">
                        <p>Total</p>
                        <h1>₹{checkOutPrice}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="promocode">
                    <p>If you have promocode, please enter it here</p>
                    <div className="promoInput">
                      <input type="text" placeholder="Promocode" />
                      <button>Apply Discount</button>
                      <button
                        onClick={handleCheckOut}
                        style={{ width: "24rem", marginLeft: "3rem" }}>
                        Check out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            <DialogActions></DialogActions>
          </div>
        </Dialog>
      </div>
      {alertData.status ? (
        <Alert behaviour={alertData.behaviour} message={alertData.message} />
      ) : (
        ""
      )}
    </>
  );
}
