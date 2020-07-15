import React from 'react'
import { Provider } from 'react-redux'
import { store } from './stores'
import { RouteContainer } from './containers/RouteContainer'

function App() {
	return (
		<Provider store={store}>
      <RouteContainer />
		</Provider>
	)
}

export default App
