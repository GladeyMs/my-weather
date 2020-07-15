import React from 'react'
import { BoxComponent } from './styled'

export const Box = ({ children, className }) => {
  return (
    <BoxComponent className={className}>
      {children}
    </BoxComponent>
  )
}
