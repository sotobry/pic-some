import React from 'react';
import { Image } from '../components/Image';
import { ContextConsumer } from '../contexts/Context';
import { getClass } from '../utils/index';
const Photos = () => {

	return (
		<main className='photos'>
			<ContextConsumer>{
				({ photos }) => photos.map((photo, i) => <Image key={photo.id} img={photo} className={getClass(i)} />)
			}
			</ContextConsumer>
		</main>
	);
};

export { Photos };