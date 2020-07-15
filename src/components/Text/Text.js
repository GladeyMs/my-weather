import React from 'react'
import { TextComponent } from './styled'

export const Text = ({ className, children }) => {
	return (
		<React.Fragment>
			<TextComponent className={className}>{children}</TextComponent>
		</React.Fragment>
	)
}
