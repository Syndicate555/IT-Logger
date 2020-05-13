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
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              message="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                />
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
export default AddLogModal;
