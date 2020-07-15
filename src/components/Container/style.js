import styled, { css } from 'styled-components'

export const ContainerComponent = styled.div`
	${(props) => {
		switch (props.className) {
			case 'container':
				return css`
					display: flex;
					background-color: #f8f8f8f8;
        `
      case 'hightlightGroup':
        return css`
          margin: 20px 0;
        `
      default:
        return css``
		}
	}}
`
