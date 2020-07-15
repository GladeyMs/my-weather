const SERVER = 'DEV'

const BASE = {
	DEV: {
		BASE_API: 'http://api.openweathermap.org',
		BASE_MASTER_API: 'http://api.openweathermap.org',
		BASE_PATH_API: '/data/2.5',
	},
}

export const BASE_API = BASE[SERVER].BASE_API
export const BASE_MASTER_API = BASE[SERVER].BASE_MASTER_API
export const BASE_PATH_API = BASE[SERVER].BASE_PATH_API
