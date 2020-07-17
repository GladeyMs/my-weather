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
