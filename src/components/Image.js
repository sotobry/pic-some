import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PhotosContextConsumer } from '../contexts/PhotosContext';


const Image = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);

	const heartIcon =
		<PhotosContextConsumer>{
			({ toggleFavorite }) =>
				<i
					className={`favorite ${
						img.isFavorite ? 'ri-heart-fill' :
							hovered ? 'ri-heart-line' : null}`
					}
					onClick={() => toggleFavorite(img.id)}></i>
		}
		</PhotosContextConsumer>


	const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

	return (
		<div className={`${className} image-container ${hovered ? 'hovered' : null}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)} >
			{heartIcon}
			{cartIcon}
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