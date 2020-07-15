import styled, { css } from 'styled-components'

export const TextComponent = styled.span`
	${(props) => {
		switch (props.className) {
			case 'city':
				return css`
					font-size: 30px;
				`
			case 'temp':
				return css`
					font-size: 42px;
				`
			case 'description':
				return css`
					font-size: 22;
				`
			case 'degree':
				return css`
					font-size: 25px;
				`
			default:
				return css``
		}
	}}
`
