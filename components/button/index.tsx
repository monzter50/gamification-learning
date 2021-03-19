import React from 'react';
// import './button.css';
import {ButtonLearn} from './ButtonStyles'
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
 const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const padding = {
    medium:'11px 20px',
    large:'12px 24px',
    small:'10px 16px',
  }
  const fontSize = {
    medium:'14px',
    large:'16px',
    small:'12px'
  }
  return (
    <ButtonLearn
      padding={padding[size]}
      fontSize={fontSize[size]}
      style={{ backgroundColor }}
      primary={primary}
      {...props}
    >
      {label}
    </ButtonLearn>
  );
};

export default Button