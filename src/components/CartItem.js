import React from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';

const CartItem = ({ item }) =>
	<div className='cart-item'>
		<PhotosContextConsumer>{
			({ removeImgFromCart }) =>
				<i className='ri-delete-bin-line' onClick={() => removeImgFromCart(item)}></i>
		}
		</PhotosContextConsumer>
		<img src={item.url} width='130px' alt='' />
		<p>$4.99</p>
	</div>

export { CartItem };