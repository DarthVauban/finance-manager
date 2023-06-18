import React from "react";
import PropTypes from "prop-types";
import styles from "./EmaiInput.module.scss";

const EmailInput = ({ placeHolder, value, onChange }) => {
  return (
    <input
      type="email"
      className={styles.EmailInput}
      placeholder={placeHolder}
    />
  );
};

EmailInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailInput;