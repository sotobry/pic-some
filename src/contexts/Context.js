import React, { useState, useEffect } from 'react';

const { Provider, Consumer } = React.createContext();
const ContextProvider = (props) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then(response => response.json())
			.then(data => setPhotos(data));
	}, []);
	console.log(photos);
	return (
		<Provider value={{ photos }}>{props.children}</Provider>
	);
};

export { ContextProvider, Consumer as ContextConsumer };