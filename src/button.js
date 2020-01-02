import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  const style = {
    padding: '.5em',
    // border: 'none',
    // background: `${props.bg_color}`,
    fontSize: '20px',
    cursor: 'pointer',
    color: `${props.font_color}`,
    // border: `5px solid #FFAF30`
  }

  const link_style = {
    textDecoration: 'none'
  }
  return (
    <Link style={link_style} to={props.link}>
      <button style={style}>{props.link_to}</button>
    </Link>
  )
}

export default Button;