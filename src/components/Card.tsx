import React, { CSSProperties } from 'react'

interface Props {
  children: Readonly<React.ReactNode>
  style?: CSSProperties;
}

const Card = ({ children, style }: Props) => {
  return (
    <div style={{ display: 'flex', height: 96, width: 160, borderRadius: 16, alignItems: 'center', justifyContent: 'center', ...style }}>
      {children}
    </div>
  )
}

export default Card