import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';

const Navigation = (): JSX.Element => {
	return (
		<NavigationContainer>
			<RootStackNavigator />
		</NavigationContainer>
	);
};

export default Navigation;
