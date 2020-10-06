import React from 'react'
import { ProgressComponent } from './styled'

export const ProgressBar = ({ type, percent, style, className, strokeColor }) => {
	return (
		<div>
			<ProgressComponent
				type={type}
				percent={percent}
				style={style}
        className={className}
        strokeColor={strokeColor}
			/>
		</div>
	)
}
