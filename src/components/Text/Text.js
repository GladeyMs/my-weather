import React from 'react'
import { TextComponent } from './styled'

export const Text = ({ className, children }) => {
	return (
		<div>
			<TextComponent className={className}>{children}</TextComponent>
		</div>
	)
}
