import React, { useState } from "react";
import Popup from "./Popup";
import "./styles.css";

function ParentPopup() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
      {openPopup ? null : (
        <button onClick={() => setOpenPopup(!openPopup)}>Open PopUp</button>
      )}
      {openPopup && (
        <Popup onClickCancel={setOpenPopup} currentPop={openPopup} />
      )}
    </div>
  );
}

export default ParentPopup;
