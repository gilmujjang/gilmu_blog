import React, { CSSProperties } from 'react'
import './AnimatedButton.css'

interface Props {
  defaultContent: string;
  hoverContent: string;
  style?: CSSProperties
}


const AnimatedButton = ({ defaultContent, hoverContent, style }: Props) => {
  return (
    <button className='animated-button' style={style}>
      <span className='default-content'>{defaultContent}</span>
      <span className='hover-content'>{hoverContent}</span>
    </button>
  )
}

export default AnimatedButton