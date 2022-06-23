import React, { Suspense } from 'react';
import { Router, Switch } from 'react-router';
import { Provider } from 'mobx-react';

import store from 'stores';
import history from 'utils/history';

//components
import SignIn from 'containers/Public/SignIn';
import SignUp from 'containers/Public/SignUp';
import PrivatePages from 'containers/Private/PageRoutes';

import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

const App = () => {
	return (
		<Suspense fallback={null}>
			<Provider {...store}>
				<Router history={history}>
					<Switch>
						<PublicRoute
							restricted={true}
							component={SignIn}
							path='/login'
							exact
						/>
						<PublicRoute
							restricted={true}
							component={SignUp}
							path='/register'
							exact
						/>
						<PrivateRoute component={PrivatePages} path='/' />
					</Switch>
				</Router>
			</Provider>
		</Suspense>
	);
};

export default App;
