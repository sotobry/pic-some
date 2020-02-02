import React, { useState, useEffect } from 'react';

const { Provider, Consumer } = React.createContext();
const PhotosContextProvider = (props) => {
	const [photos, setPhotos] = useState([]);

	const toggleFavorite = id => setPhotos(prevPhotos => prevPhotos.map(photo => {
		if (photo.id === id) {
			console.log({ id }, !photo.isFavorite);
			return { ...photo, isFavorite: !photo.isFavorite };
		}
		return photo;
	}));

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then(response => response.json())
			.then(data => setPhotos(data));
	}, []);

	return (
		<Provider value={{ photos, toggleFavorite }}>
			{props.children}
		</Provider>
	);
};

export { PhotosContextProvider, Consumer as PhotosContextConsumer };