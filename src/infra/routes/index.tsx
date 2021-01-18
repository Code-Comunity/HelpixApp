import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import CandidateOpportunitie from '../../app/screens/authenticatedScreen/Employee/Candidate';
import DashboardEmployee from '../../app/screens/authenticatedScreen/Employee/Dashboard';
import OpportunitiesEmployee from '../../app/screens/authenticatedScreen/Employee/Opportunities';
import DashboardEmployer from '../../app/screens/authenticatedScreen/Employer/Dashboard';
import EditOpportunities from '../../app/screens/authenticatedScreen/Employer/EditOpportunities';
import OpportunitiesEmployer from '../../app/screens/authenticatedScreen/Employer/Opportunities';
import PostOpportunities from '../../app/screens/authenticatedScreen/Employer/PostOpportunities';
import ChooseOptions from '../../app/screens/notAuthenticatedScreen/chooseOptions';
import Home from '../../app/screens/notAuthenticatedScreen/home';
import LoginEmployee from '../../app/screens/notAuthenticatedScreen/LoginEmployee';
import LoginEmployer from '../../app/screens/notAuthenticatedScreen/LoginEmployer';
import CadastroEmployee from '../../app/screens/notAuthenticatedScreen/CadastroEmployee';
import CadastroEmployer from '../../app/screens/notAuthenticatedScreen/CadastroEmployer';

import { AuthContext } from '../contexts/auth/auth';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
	const { signed } = useContext(AuthContext);

	return signed ? (
		<Stack.Navigator initialRouteName="Dashboard">
			{/* Employee - Alunos */}
			<Stack.Screen name="DashboardEmployee" component={DashboardEmployee} options={{ headerShown: false }} />
			<Stack.Screen name="OpportunitiesEmployee" component={OpportunitiesEmployee} options={{ headerShown: false }} />
			<Stack.Screen name="CandidateOpportunitie" component={CandidateOpportunitie} options={{ headerShown: false }} />
			{/* Employer - Empresas */}
			<Stack.Screen name="DashboardEmployer" component={DashboardEmployer} options={{ headerShown: false }} />
			<Stack.Screen name="OpportunitiesEmployer" component={OpportunitiesEmployer} options={{ headerShown: false }} />
			<Stack.Screen name="PostOpportunities" component={PostOpportunities} options={{ headerShown: false }} />
			<Stack.Screen name="EditOpportunities" component={EditOpportunities} options={{ headerShown: false }} />
		</Stack.Navigator>
	) : (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
			<Stack.Screen name="ChooseOptions" component={ChooseOptions} options={{ headerShown: false }} />
			<Stack.Screen name="LoginEmployer" component={LoginEmployer} options={{ headerShown: false }} />
			<Stack.Screen name="LoginEmployee" component={LoginEmployee} options={{ headerShown: false }} />
			<Stack.Screen name="CadastroEmployer" component={CadastroEmployer} options={{ headerShown: false }} />
			<Stack.Screen name="CadastroEmployee" component={CadastroEmployee} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
};

export default Routes;
