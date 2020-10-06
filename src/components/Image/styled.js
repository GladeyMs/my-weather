import styled, { css } from 'styled-components'

export const ImageComponent = styled.img`
	${(props) => {
		switch (props.className) {
			case 'currentWeather':
				return css`
					width: 70%;
				`
			case 'riseset':
				return css`
          width: 40px;
				`
			default:
				return css``
		}
	}}
`
