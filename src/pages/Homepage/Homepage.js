import React, { useEffect, useState } from 'react'
import moment from 'moment'
import {
	Card,
	Text,
	SearchSelect,
	Option,
	Box,
	Container,
	Image,
} from '../../components'
import { currentWeatherController } from '../../apiServices'
import { isValidResponse } from '../../helpers'
import { IMAGES } from '../../themes/images'

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
			const wind = (Math.round(res.wind.speed * 3.6 * 100) / 100).toFixed(2)
			const humidity = res.main.humidity
			const description = res.weather.map((e) => e.description)
			const sunrise = moment.unix(res.sys.sunrise).format('H:mm A')
			const sunset = moment.unix(res.sys.sunset).format('H:mm A')
			const icon = res.weather.map((e) => e.icon)
			setData({
				temp,
				city,
				description,
				wind,
				icon,
				humidity,
				sunrise,
				sunset,
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
				<Text className='city'>{data.city}</Text>
				<Image
					src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
					alt='icon'
				/>
				<Box className='tempDegree'>
					<Text className='temp'>{data.temp}</Text>
					<Text className='degree'> ํC</Text>
				</Box>
				<Text className='description'>{data.description}</Text>
			</Card>
			<Container className='hightlightGroup'>
				<Box className='rowGroup'>
					<Card className='hightlight'>
						<Text className='title'>Wind</Text>
						<Text className='detail'>{data.wind} km/h</Text>
					</Card>
					<Card className='hightlight'>
						<Text className='title'>{'Sunrise & Sunset'}</Text>
						<Box className='rowSun'>
							<Image
								src={IMAGES['sunrise.png']}
								className='riseset'
								alt='sunrise'
							/>
							<Text className='sun'>{data.sunrise}</Text>
						</Box>
						<Box className='rowSun'>
							<Image
								src={IMAGES['sunset.png']}
								className='riseset'
								alt='sunset'
							/>
							<Text className='sun'>{data.sunset}</Text>
						</Box>
					</Card>
					<Card className='hightlight'>asd</Card>
				</Box>
				<Box className='rowGroup'>
					<Card className='hightlight'>
						<Text className='title'>Humidity</Text>
						<Text className='detail'>{data.humidity} %</Text>
					</Card>
					<Card className='hightlight'>asd</Card>
					<Card className='hightlight'>asd</Card>
				</Box>
			</Container>
		</Container>
	)
}
