import React, { useState } from "react";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  return <div id="add-log-modal" className="modal" style={modalStyle}></div>;
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
export default AddLogModal;
