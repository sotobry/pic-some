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
				({ toggleFavorite, addImgToCart }) => {
					const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => addImgToCart(img)}></i>;
					return (
						<>
							<i
								className={`favorite ${
									img.isFavorite ? 'ri-heart-fill' :
										hovered ? 'ri-heart-line' : null}`
								}
								onClick={() => toggleFavorite(img.id)}></i>
							{cartIcon}
						</>
					);
				}
			}
			</PhotosContextConsumer>
			{/* {heartIcon} */}
			{/* {cartIcon} */}
			<img className='image-grid' src={img.url} alt='' />
		</div>
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