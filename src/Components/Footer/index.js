import React from "react";
import "./style.scss";
import { Container } from "@mui/material";

function Index() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(248, 248, 248);" }}>
        <Container sx={{ padding: " 4.8rem 0px 2.2rem" }}>
          <div className="logoBox">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*"
              alt="Zomato logo"
            />
          </div>
          <div className="navGridBox">
            <nav className="navGridItem">
              <h6>Company</h6>
              <a href="#">
                <p>Who We Are</p>
              </a>
              <a href="#">
                <p>Blog</p>
              </a>
              <a href="#">
                <p>Career</p>
              </a>
              <a href="#">
                <p>Fraud Report</p>
              </a>
              <a href="#">
                <p>Contact</p>
              </a>
              <a href="#">
                <p>Investor Relation</p>
              </a>
            </nav>

            <nav className="navGridItem">
              <h6>for foodies</h6>
              <a href="#">
                <p>Code of Conduct</p>
              </a>
              <a href="#">
                <p>Community</p>
              </a>
              <a href="#">
                <p>Blogger Help</p>
              </a>
              <a href="#">
                <p>Mobile Apps</p>
              </a>
            </nav>

            <nav className="navGridItem">
              <div style={{ marginBottom: "3rem" }}>
                <h6>For Restaurants</h6>
                <a href="#">
                  <p>Add Restuarants</p>
                </a>
              </div>
              <h6>For Enterprises</h6>
              <a href="#">
                <p>Zomato for Work</p>
              </a>
            </nav>

            <nav className="navGridItem">
              <h6>for you</h6>
              <a href="#">
                <p>Privacy</p>
              </a>
              <a href="#">
                <p>Terms</p>
              </a>
              <a href="#">
                <p>Security</p>
              </a>
              <a href="#">
                <p>Sitemap</p>
              </a>
            </nav>

            <nav className="navGridItem">
              <h6>social links</h6>
              <div style={{ display: "flex", marginBottom:'2.4rem' }}>
                <a
                  style={{ textDecoration: "none", marginRight: "0.8rem" }}
                  href="https://www.facebook.com/zomato"
                  target="_blank"
                  class="sc-elhb8j-17 iDzUMo">
                  <div class="sc-elhb8j-7 jBOGYb">
                    <i class="sc-rbbb40-1 iFnyeo" size="22" color="#1C1C1C">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1C1C1C"
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        class="sc-rbbb40-0 cvuzKA">
                        <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path>
                      </svg>
                    </i>
                  </div>
                </a>
                <a
                  style={{ textDecoration: "none", marginRight: "0.8rem" }}
                  href="https://twitter.com/zomato"
                  target="_blank"
                  class="sc-elhb8j-17 iDzUMo">
                  <div class="sc-elhb8j-7 jBOGYb">
                    <i class="sc-rbbb40-1 iFnyeo" size="22" color="#1C1C1C">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1C1C1C"
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        class="sc-rbbb40-0 cvuzKA">
                        <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.0625 8.125V8.5L9.6875 8.4375C8.3125 8.25 7.125 7.6875 6.125 6.6875L5.625 6.1875L5.5 6.5625C5.25 7.375 5.375 8.25 5.9375 8.8125C6.25 9.125 6.1875 9.1875 5.6875 9C5.5 8.9375 5.375 8.875 5.3125 8.9375C5.25 9 5.4375 9.6875 5.5625 9.9375C5.75 10.3125 6.1875 10.6875 6.5625 10.875L6.9375 11.0625H6.5C6.0625 11.0625 6.0625 11.0625 6.125 11.25C6.3125 11.75 6.875 12.25 7.5625 12.5L8 12.6875L7.625 12.9375C7 13.3125 6.3125 13.5 5.625 13.5C5.3125 13.5 5 13.5625 5 13.5625C5 13.625 5.9375 14.0625 6.4375 14.25C8.0625 14.75 9.9375 14.5 11.375 13.6875C12.375 13.0625 13.375 11.875 13.875 10.75C14.125 10.125 14.375 9 14.375 8.5C14.375 8.1875 14.4375 8.125 14.8125 7.6875C15.0625 7.4375 15.3125 7.1875 15.3125 7.0625C15.375 6.9375 15.375 6.9375 15 7.0625C14.375 7.3125 14.25 7.25 14.625 6.875C14.875 6.625 15.125 6.1875 15.125 6.0625C15.125 6.0625 15 6.0625 14.875 6.125C14.75 6.1875 14.4375 6.3125 14.1875 6.375L13.8125 6.5L13.5 6.25C13.3125 6.125 13 5.9375 12.875 5.9375C12.5 5.8125 11.9375 5.8125 11.5625 6C10.5625 6.25 10 7.1875 10.0625 8.125Z"></path>
                      </svg>
                    </i>
                  </div>
                </a>
                <a
                  style={{ textDecoration: "none", marginRight: "0.8rem" }}
                  href="https://www.instagram.com/zomato/"
                  target="_blank"
                  class="sc-elhb8j-17 iDzUMo">
                  <div class="sc-elhb8j-7 jBOGYb">
                    <i class="sc-rbbb40-1 iFnyeo" size="22" color="#1C1C1C">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1C1C1C"
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        class="sc-rbbb40-0 cvuzKA">
                        <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"></path>
                      </svg>
                    </i>
                  </div>
                </a>
              </div>
              <a href="#">
                <img
                  style={{
                    position: " relative",
                    maxWidth: "100%",
                    width: "13.7rem",
                    height: "4rem",
                    overflow: "hidden",
                  }}
                  alt="ios"
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  loading="lazy"
                />
              </a>
              <a style={{ display: "block" }} href="#">
                <img
                  style={{
                    position: " relative",
                    maxWidth: "100%",
                    width: "13.7rem",
                    height: "4rem",
                    overflow: "hidden",
                    marginTop: "1.2rem",
                  }}
                  // style={{ marginLeft: "2rem" }}
                  alt="android"
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  loading="lazy"
                />
              </a>
            </nav>
          </div>
          <hr className="line"/>
          <p className="copyright">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</p>
        </Container>
      </div>
    </>
  );
}

export default Index;
