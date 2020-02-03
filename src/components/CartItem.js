import React from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';

const CartItem = ({ item }) => {
	const [hoveredBin, setHoveredBin] = React.useState(false);


	return (
		<div className='cart-item'>
			<PhotosContextConsumer>{
				({ removeImgFromCart }) =>
					<i className={`ri-delete-bin-${hoveredBin ? 'fill' : 'line'}`}
						onClick={() => removeImgFromCart(item)}
						onMouseEnter={() => setHoveredBin(true)}
						onMouseLeave={() => setHoveredBin(false)}></i>
			}
			</PhotosContextConsumer>
			<img src={item.url} width='130px' alt='' />
			<p>$4.99</p>
		</div>
	);
};


export { CartItem };