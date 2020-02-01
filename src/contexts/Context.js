import React from 'react';

const { Provider, Consumer } = React.createContext();
const ContextProvider = (props) => {
	return (
		<Provider value=''>{props.children}</Provider>
	);
};

export { ContextProvider, Consumer as ContextConsumer };