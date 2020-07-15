import styled, { css } from 'styled-components'

export const CardComponent = styled.div`
	background-color: #fff;
	${(props) => {
		switch (props.className) {
			case 'currentWeather':
				return css`
					width: 50vh;
					height: 100vh;
					border-radius: 5px;
					padding: 10px 20px;
				`
			case 'hightlight':
				return css`
					width: 200px;
					height: 180px;
					border-radius: 5px;
					padding: 10px 20px;
					margin: 0 20px;
				`
			default:
				return css``
		}
	}}
`
