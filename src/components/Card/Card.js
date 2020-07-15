import React from 'react'
import { CardComponent } from './styled'

export const Card = ({ className, children }) => {
	return <CardComponent className={className}>{children}</CardComponent>
}
