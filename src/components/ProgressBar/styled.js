import styled, { css } from 'styled-components'
import { Progress } from 'antd'

export const ProgressComponent = styled(Progress)`
	${(props) => {
		switch (props.className) {
			case 'humidityBar':
        return css`
        
				`
			default:
				return css``
		}
	}}
`
