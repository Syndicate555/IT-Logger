import React, { useState } from "react";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  return <div id="add-log-modal" className="modal"></div>;
};

export default AddLogModal;
