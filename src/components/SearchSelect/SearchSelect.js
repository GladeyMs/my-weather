import React from 'react'
import { SearchSelectComponent } from './styled'

export const { Option } = SearchSelectComponent

export const SearchSelect = ({
	showSearch,
	showArrow,
	placeholder,
	onSearch,
	onChange,
	className,
	children,
	value,
}) => {
	return (
		<SearchSelectComponent
			showSearch={showSearch}
			showArrow={showArrow}
			placeholder={placeholder}
			onSearch={onSearch}
			onChange={onChange}
			className={className}
			value={value}
		>
			{children}
		</SearchSelectComponent>
	)
}
