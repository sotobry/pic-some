import React, { useState } from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';

const Image = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);

	const heartIcon = hovered &&
		<PhotosContextConsumer>
			{({ toggleFavorite }) =>
				<i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
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

export { Image };