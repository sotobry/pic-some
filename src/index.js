import React from 'react';
import ReactDOM from 'react-dom';
import { PhotosContextProvider } from './contexts/PhotosContext';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<PhotosContextProvider>
		<Router>
			<App />
		</Router>
	</PhotosContextProvider>,
	document.getElementById('root'));