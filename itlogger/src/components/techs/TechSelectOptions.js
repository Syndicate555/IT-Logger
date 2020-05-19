import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  return <div></div>;
};

TechSelectOptions.propTypes = {};

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
