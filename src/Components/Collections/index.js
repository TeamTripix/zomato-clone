import React from "react";
import "./style.scss";
import CollectionsCard from "../CollectionsCard";
import resData from "../../data.json";

function Index() {
  const data = resData.colletion_card_data;
  return (
    <>
      <div className="collections">
        <h1>Collections</h1>
        <div className="collectionsPara">
          <h6>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </h6>
          <span
            tabindex="-1"
            color="#FF7E8B"
            target="_self"
            role="link"
            class="sc-ks3f96-1 cndCgo">
            All collections in Delhi NCR
            <i
              class="sc-rbbb40-1 iFnyeo sc-iBEsjs gAmvxi"
              color="#FF7E8B"
              size="12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 ezrcri">
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </i>
          </span>
        </div>

        <div className="gridContainer">
          {data.map((data) => {
            return (
              <div>
                <CollectionsCard
                  image_url={data.image_url}
                  place_no={data.place_no}
                  name={data.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Index;
