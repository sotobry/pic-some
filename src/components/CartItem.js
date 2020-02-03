import React from 'react';
// import { PhotosContextConsumer } from '../contexts/PhotosContext';

const CartItem = ({ item }) =>
	<div className='cart-item'>
		<i className='ri-delete-bin-line'></i>
		<img src={item.url} width='130px' alt='' />
		<p>$4.99</p>
	</div>

export { CartItem };