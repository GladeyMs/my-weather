import React from 'react'
import { ContainerComponent } from './style'

export const Container = ({ children, className }) => {
	return (
		<ContainerComponent className={className}>{children}</ContainerComponent>
	)
}
