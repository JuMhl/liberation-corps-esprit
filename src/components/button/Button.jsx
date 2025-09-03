import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

/**
 * Global Button component
 * Props:
 * - to: string | null (if provided renders a <Link>, otherwise a <button>)
 * - onClick: function
 * - variant: 'primary' | 'secondary'
 * - children: node
 * - type: button type when native button
 */
const Button = ({ to, href, as, onClick, variant = 'primary', children, type = 'button', className = '', ...rest }) => {
  const classes = `custom-button custom-button--${variant} ${className}`.trim();

  if (to) {
    return <Link to={to} className={classes} {...rest}>{children}</Link>;
  }

  // external link or forced anchor
  if (as === 'a' || href) {
    return <a href={href} className={classes} {...rest}>{children}</a>;
  }

  return <button type={type} onClick={onClick} className={classes} {...rest}>{children}</button>;
};
export default Button;
