import React, { useState } from 'react';

const Image = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);
	console.log(img.id, { hovered });

	const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
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