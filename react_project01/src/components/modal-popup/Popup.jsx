import React from "react";

function Popup({ onClickCancel, currentPop }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-btn" onClick={() => onClickCancel(!currentPop)}>
          X
        </span>
        <div className="popup-heading">
          <p>Alert! Summer Sale is Live</p>
        </div>
        <div className="popup-body">
          <p>Grab on the extra discounts on clothings and lifestyle section</p>
          <p>Grab on the extra discounts on clothings and lifestyle section</p>
          <p>Grab on the extra discounts on clothings and lifestyle section</p>
        </div>
        <div className="popup-footer">
          <p>Hurry ! Offer valid till 30th August</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
