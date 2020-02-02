import React, { useState } from 'react';

const Image = ({ className, img }) => {
	const [hovered, setHovered] = useState(false);
	console.log(img.id, { hovered });
	return (
		<div className={`${className} image-container ${hovered ? 'hovered' : null}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)} >
			<img className='image-grid' src={img.url} alt='' />
		</div>
	);
};

export { Image };