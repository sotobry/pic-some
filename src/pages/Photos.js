import React from 'react';
import { Image } from '../components/Image';
import { PhotosContextConsumer } from '../contexts/PhotosContext';
import { getClass } from '../utils/index';
const Photos = () => {

	return (
		<main className='photos'>
			<PhotosContextConsumer>{
				({ photos }) => photos.map((photo, i) => <Image key={photo.id} img={photo} className={getClass(i)} />)
			}
			</PhotosContextConsumer>
		</main>
	);
};

export { Photos };