import React from 'react'
import { ImageComponent } from './styled'

export const Image = ({ src, alt, className }) => {
	return (
		<div>
			<ImageComponent src={src} alt={alt} className={className} />
		</div>
	)
}
