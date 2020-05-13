import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-model"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <span className="grey-text"></span>
      </div>
    </li>
  );
};

LogItem.propTypes = { log: PropTypes.object.isRequired };

export default LogItem;
