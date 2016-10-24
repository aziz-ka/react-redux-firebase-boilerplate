import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';


function Button({ children, className, onClick, type = 'button' }) {
  const buttonClasses = classNames(styles.btn, className);

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
