import styled, { css } from 'styled-components'
import { Select } from 'antd'

export const SearchSelectComponent = styled(Select)`
	${(props) => {
		switch (props.className) {
			case 'searchBox':
				return css`
					width: 100%;
				`
			default:
				return css``
		}
	}}
`
