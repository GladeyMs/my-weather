import styled, { css } from 'styled-components'

export const BoxComponent = styled.div`
	${(props) => {
		switch (props.className) {
			case 'tempDegree':
				return css`
					display: flex;
					align-items: flex-start;
				`
			case 'rowGroup':
				return css`
					display: flex;
					margin-bottom: 10px;
				`
			case 'rowSun':
				return css`
					display: flex;
					margin-top: 10px;
					align-items: center;
				`
			default:
				return css``
		}
	}}
`
