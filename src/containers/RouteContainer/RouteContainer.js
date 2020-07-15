import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'
import { Homepage } from '../../pages'
import { ROUTE_PATH } from '../../helpers'

export const RouteContainer = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTE_PATH.HOME.LINK} component={Homepage} />
			</Switch>
		</Router>
	)
}
