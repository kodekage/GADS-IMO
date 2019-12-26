import React from 'react';

function Button(props) {
  const style = {
    padding: '.5em',
    border: 'none',
    background: `${props.bg_color}`,
    fontSize: '20px',
    cursor: 'pointer',
    color: `${props.font_color}`,
    // border: `5px solid #FFAF30`
  }

  const link_style = {
    textDecoration: 'none'
  }
  return (
    <a style={link_style} href="#videoComponent">
      <button style={style}>{props.link_to}</button>
    </a>
  )
}

export default Button;