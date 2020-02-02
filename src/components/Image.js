import React from 'react';

const Image = ({ className, img }) => {
	return (
		<div className={`${className} image-container`}>
			<img className='image-grid' src={img.url} alt='' />
		</div>
	);
};

export { Image };