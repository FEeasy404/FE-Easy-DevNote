import React from 'react';
import PropTypes from 'prop-types';
import "./button.css";

export default function Button ({href, size, label, active, primary, onClick}) {
  const classList = ['button', size, primary ? '': 'secondary', active ? '' : 'disabled'];

  return (
    <>
    { href ? 
      <a href={href} className={`${classList.join(' ')}`}>
        {label}
      </a> 
     : 
      <button type='button' onClick={onClick} className={`${classList.join(' ')}`}>
        {label}
      </button>
    }
    </>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'medium_small', 'small']),
  label: PropTypes.string,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  href: undefined,
  size: 'medium',
  label: 'button',
  active: true,
  primary: true,
  onClick: undefined,
}