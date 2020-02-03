import React, { useState, useEffect } from 'react';

const { Provider, Consumer } = React.createContext();
const PhotosContextProvider = (props) => {
	const [photos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	const toggleFavorite = id => setPhotos(prevPhotos => prevPhotos.map(photo => {
		if (photo.id === id) {
			console.log({ id }, !photo.isFavorite);
			return { ...photo, isFavorite: !photo.isFavorite };
		}
		return photo;
	}));

	const addImgToCart = (imgObj) => {
		setCartItems(prevCart => [...prevCart, imgObj]);
	};
	console.log(cartItems);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then(response => response.json())
			.then(data => setPhotos(data));
	}, []);

	return (
		<Provider value={{ photos, toggleFavorite, addImgToCart }}>
			{props.children}
		</Provider>
	);
};

export { PhotosContextProvider, Consumer as PhotosContextConsumer };