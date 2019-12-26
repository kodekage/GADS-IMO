import React from 'react';

function Button(props) {
  const style = {
    padding: '.5em 2em',
    border: 'none',
    background: `${props.bg_color}`,
    fontSize: '18px',
    cursor: 'pointer',
    color: '#ffffff'
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