import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PhotosContextConsumer } from '../contexts/PhotosContext';


const Image = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div className={`${className} image-container ${hovered ? 'hovered' : null}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)} >
			<PhotosContextConsumer>{
				({ toggleFavorite, addImgToCart, cartItems, removeImgFromCart }) => {

					const cartHasImg = cartItems.some(item => img.id === item.id);

					const heartIcon = <i
						className={`favorite ${
							img.isFavorite ? 'ri-heart-fill' :
								hovered ? 'ri-heart-line' : null}`
						}
						onClick={() => toggleFavorite(img.id)}></i>;

					const cartIcon = () => {

						let iconType = '';
						let handleClick = null;

						if (cartHasImg) {
							iconType = 'ri-shopping-cart-fill';
							handleClick = () => removeImgFromCart(img);
						}
						else if (hovered) {
							iconType = 'ri-add-circle-line';
							handleClick = () => addImgToCart(img);
						}

						return <i className={`cart ${iconType}`} onClick={handleClick}></i>;
					}
					return (
						<>
							{heartIcon}
							{cartIcon()}
						</>
					);
				}
			}
			</PhotosContextConsumer>
			<img className='image-grid' src={img.url} alt='' />
		</div >
	);
};


Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired
	})
}
export { Image };