import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/redux/store';
import { Provider } from 'react-redux';

import HomeScreen from './src/screens/HomeScreen';
import CreateListScreen from './src/screens/CreateListScreen';
import CompletedListsScreen from './src/screens/CompletedListsScreen';
import ListScreen from './src/screens/ListScreen';

const App = () => {

	const Stack = createNativeStackNavigator();

  	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#560bad',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						}
					}}
				>
					<Stack.Screen 
						name="Home"
						component={HomeScreen}
						options={{ title: 'My Lists' }}
					/>
					<Stack.Screen 
						name="NewList"
						component={CreateListScreen}
						options={{ title: 'New List' }}
					/>
					<Stack.Screen 
						name="Completed"
						component={CompletedListsScreen}
						options={{ title: 'Completed Lists' }}
					/>
					<Stack.Screen 
						name="List"
						component={ListScreen}
						options={({ route }) => ({ title: `${route.params.list.name} - ${route.params.list.date}` })}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
  	);
};

export default App;