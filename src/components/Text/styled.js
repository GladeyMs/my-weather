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
			case 'title':
				return css`
					font-size: 14px;
					color: #c0c0c0;
				`
			case 'detail':
				return css`
					font-size: 26px;
				`
			case 'sun':
				return css`
					font-size: 18px;
					margin-left: 5px;
				`
			default:
				return css``
		}
	}}
`
