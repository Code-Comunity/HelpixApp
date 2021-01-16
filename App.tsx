import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/infra/contexts/auth/auth';
import Routes from './src/infra/routes';


const App: React.FC = () => {
	return (
		<AuthProvider>
			<NavigationContainer>
					<Routes />
			</NavigationContainer>
		</AuthProvider>
	);
}

export default App;
