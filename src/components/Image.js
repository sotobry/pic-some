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
				({ toggleFavorite, addImgToCart, cartItems }) => {

					const cartHasImg = cartItems.some(item => img.id === item.id);

					const heartIcon = <i
						className={`favorite ${
							img.isFavorite ? 'ri-heart-fill' :
								hovered ? 'ri-heart-line' : null}`
						}
						onClick={() => toggleFavorite(img.id)}></i>;

					const cartIcon = <i
						className={`cart ${
							cartHasImg ? 'ri-shopping-cart-fill' :
								hovered ? 'ri-add-circle-line' : null}`
						}
						onClick={() => addImgToCart(img)}></i>

					return (
						<>
							{heartIcon}
							{cartIcon}
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