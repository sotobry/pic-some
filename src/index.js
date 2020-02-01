import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './contexts/Context';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<ContextProvider>
		<Router>
			<App />
		</Router>
	</ContextProvider>,
	document.getElementById('root'));