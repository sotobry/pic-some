import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext();
const ContextProvider = (props) => {
	const [photos, setPhotos] = useState([]);
	return (
		<Provider value={{ photos }}>{props.children}</Provider>
	);
};

export { ContextProvider, Consumer as ContextConsumer };