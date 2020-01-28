import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store/store';
import ToDoScreen from './src/screens/ToDoScreen';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ToDoScreen />
			</PersistGate>
		</Provider>
	);
};

export default App;
