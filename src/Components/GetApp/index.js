import React from "react";
import "./style.scss";
import { TextField } from "@mui/material";
// import ios from "../../assets/image/ios.webp"
import test from "./mobile.avif"

function Index() {
  // console.log(ios)
  return (
    <>
      <div className="appContainer">
        <div className="mobileImg">
          <img
            // scr="https://b.zmtcdn.com/data/pro/5722d9e687511d79616bcab92470734e1596187147.png"
            src={test}
            alt="Mobile"
          />
        </div>
        <div className="formContainer">
          <h1>Get the Zomato App</h1>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="radioBox">
            <section name="radio" selected="" className="boxSection">
              <section className="radioButton">
                <label class="sc-1ukzvu4-0 jrHtYr">
                  <input
                    type="radio"
                    name="radio"
                    value="email"
                    label="Email"
                    checked=""
                    class="sc-djusq7-5 eiwrnG"
                  />
                  <svg
                    viewBox="0 0 20 20"
                    id="circle"
                    class="sc-djusq7-2 ctMLcL">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      name="radio"
                      value="email"
                      label="Email"
                      checked=""
                      class="bigCircle"></circle>
                    <circle
                      cx="10"
                      cy="10"
                      r="5"
                      name="radio"
                      value="email"
                      label="Email"
                      class="smallCircle"></circle>
                  </svg>
                  <span class="sc-djusq7-0 gBeNIg">Email</span>
                </label>
              </section>
              <section className="radioButton">
                <label class="sc-1ukzvu4-0 jrHtYr">
                  <input
                    type="radio"
                    name="radio"
                    value="mobile"
                    label="Phone"
                    class="sc-djusq7-5 eiwrnG"
                  />
                  <svg
                    viewBox="0 0 20 20"
                    id="circle"
                    class="sc-djusq7-2 ctMLcL">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      name="radio"
                      value="mobile"
                      label="Phone"
                      class="bigCircle"></circle>
                  </svg>
                  <span class="sc-djusq7-0 gBeNIg">Phone</span>
                </label>
              </section>
            </section>
          </div>
          <div className="appLinkBox">
            <TextField
              fullWidth
              InputProps={{ style: { fontSize: "15px" } }}
              InputLabelProps={{ style: { fontSize: "15px" } }}
              sx={{ backgroundColor: "#fff" }}
              label="Email"
            />
            <div class="sc-1yzxt5f-5 QjbsL"></div>
            <button class="shareButton" tabindex="0" aria-disabled="false">
              Share App Link
            </button>
          </div>
          <div>
            <p>Download app from</p>
            <div className="LinkImageBox">
              <a href="#">
                <img
                  alt="ios"
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  loading="lazy"
                />
              </a>
              <a href="#">
                <img
                  style={{ marginLeft: "2rem" }}
                  alt="android"
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
