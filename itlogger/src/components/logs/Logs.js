import React, { useEffect } from "react";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import styled from "styled-components";
import Preloader from "../layout/Preloader";
const Logs = ({ log: { logs, loading } }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center" style={{ fontFamily: "Jura" }}>
          {" "}
          System Logs
        </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show.....</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps)(Logs);
