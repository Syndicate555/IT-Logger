import React, { useState } from "react";

const AddLogModal = () => {
  //states
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 style={{ fontFamily: "Jura" }}>Enter System Log</h4>
        <div className="row"></div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
export default AddLogModal;
