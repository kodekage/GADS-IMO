import React from 'react';

function Button(props) {
  const style = {
    width: '300px',
    padding: '1em 0',
    border: 'none',
    background: `${props.bg_color}`,
    // background: 'transparent',
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