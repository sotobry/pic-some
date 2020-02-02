import React, { useState } from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';

const Image = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);


	/*
				favorite 								show filled heart
				!favorite && hovered		show empty heart
				!favorite && !hovered		don't show anything
	*/
	// const heartIcon = null;
	// if (img.isFavorite) heartIcon = 
	// <i className={`ri-heart-fill favorite`} onClick={() => toggleFavorite(img.id)}></i>
	// else if (hovered) <i className={`ri-heart-line favorite`} onClick={() => toggleFavorite(img.id)}></i>


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

export { Image };