import React, { useEffect, useState } from 'react'
import {
	Card,
	Text,
	SearchSelect,
	Option,
	Box,
	Container,
} from '../../components'
import { currentWeatherController } from '../../apiServices'
import { isValidResponse } from '../../helpers'

export const Homepage = () => {
	const [data, setData] = useState({})
	const [city, setCity] = useState([])

	useEffect(() => {
		handleGetData()
	}, [])

	const handleGetData = async () => {
		const params = {
			q: 'Bangkok',
			appid: 'ed83396a6ac7c30bad91228ce34dd623',
			units: 'metric',
		}
		const API = currentWeatherController(params)
		const res = await API.getCurrentWeather()
		if (isValidResponse(res)) {
			console.log(res)
			const city = res.name
			const temp = res.main.temp
			const wind = res.wind.speed * 3.6
			const humidity = res.main.humidity
			const description = res.weather.map((e) => e.description)
			const icon = res.weather.map((e) => e.icon)
			setData({
				temp,
				city,
				description,
				wind,
				icon,
				humidity
			})
		}
	}

	const handleSearchChange = (value) => {
		setCity({ value })
	}

	return (
		<Container className='container'>
			<Card className='currentWeather'>
				<SearchSelect
					className='searchBox'
					showSearch
					placeholder='search'
					value={city}
					onChange={handleSearchChange}
				>
					<Option>asd</Option>
					<Option>a</Option>
					<Option>d</Option>
				</SearchSelect>
				<div>
					<Text className='city'>{data.city}</Text>
				</div>
				<img
					src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
					alt='icon'
				/>
				<Box className='tempDegree'>
					<Text className='temp'>{data.temp}</Text>
					<Text className='degree'> ํC</Text>
				</Box>
				<div>
					<Text className='description'>{data.description}</Text>
				</div>
			</Card>
			<Container className='hightlightGroup'>
				<Box className='rowGroup'>
					<Card className='hightlight'>{data.wind} km/h</Card>
					<Card className='hightlight'>
						<div>Sunset</div>
					</Card>
					<Card className='hightlight'>asd</Card>
				</Box>
				<Box className='rowGroup'>
					<Card className='hightlight'>{data.humidity} %</Card>
					<Card className='hightlight'>asd</Card>
					<Card className='hightlight'>asd</Card>
				</Box>
			</Container>
		</Container>
	)
}
