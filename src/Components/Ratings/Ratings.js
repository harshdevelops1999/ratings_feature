import React, { useState, useEffect } from "react";
import "./Ratings.css";
import Bottombar from "../Bottombar/Bottombar";
import axios from "axios";
import star from "../../Assets/star.svg";
function Ratings() {
  const [showSlider, setShowSlider] = useState(false);
  const [ecocDetails, setEcocDetails] = useState([]);
  const [virtuallyMetDetails, setVirtuallyMetDetails] = useState([]);
  const [isEcoc, setIsEcoc] = useState(false);
  const showSliderMethod = () => {
    setShowSlider(true);
  };
  const hideSliderMethod = () => {
    setShowSlider(false);
  };
  useEffect(() => {
    fetchCodeOfConduct();
    fetchVirtuallyMet();
  }, []);

  const fetchCodeOfConduct = () => {
    axios
      .post(
        `/noSessionPreviewRatingsEthicalCode?userCode=64af8db82bf83d9ecc041bdf&start=1&offset=10`
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setEcocDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  const fetchVirtuallyMet = () => {
    axios
      .post(
        "/noSessionPreviewRatingsVirtuallyMet?userCode=64af8db82bf83d9ecc041bdf&start=1&offset=10"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setVirtuallyMetDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div className="parent">
      <Bottombar
        isEcoc={isEcoc}
        renderData={isEcoc ? ecocDetails : virtuallyMetDetails}
        showSlider={showSlider}
        showSliderMethod={showSliderMethod}
        hideSliderMethod={hideSliderMethod}
      />
      <div className="star">
        <img src={star} alt="star" />
      </div>
      <div className="ratingsHead">Ratings</div>
      <div className="ratingsContainer">
        <div
          className="rating"
          onClick={() => {
            // fetchCodeOfConduct();
            // handleShow();
            setShowSlider(true);
            setIsEcoc(true);
          }}
        >
          <div className="ratingCount">{ecocDetails.ethicalCodeYesCount}</div>
          <div className="text">
            Has ethical code of conduct and is safe to do bussines with
          </div>
        </div>
        <div className="line"></div>
        <div
          className="rating"
          onClick={() => {
            // fetchVirtuallyMet();
            // handleShow();
            setShowSlider(true);
            setIsEcoc(false);
          }}
        >
          <div className="ratingCount">
            {virtuallyMetDetails.virtuallyMetYesCount}
          </div>
          <div className="text">Met In real life/Video call</div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
