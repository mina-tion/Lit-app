import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// utils
import { isLogin } from 'utils/login';

const PublicRoute = ({
	component: Component,
	...rest
}: any): any => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin()  ? <Redirect to='/' /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
