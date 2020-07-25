import styled, { css } from 'styled-components'

export const ImageComponent = styled.img`
	${(props) => {
		switch (props.className) {
			case 'riseset':
				return css`
          width: 40px;
				`
			default:
				return css``
		}
	}}
`
