import apiService from '../apiService'

const apiPath = '/weather'

export const currentWeatherController = (configService) => {
	const service = apiService(configService)
	return {
		getCurrentWeather: () => {
			return service.get({
				url: `${apiPath}`,
			})
		},
	}
}

// q: 'Bangkok',
// appid: 'ed83396a6ac7c30bad91228ce34dd623'
