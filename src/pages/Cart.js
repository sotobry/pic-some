import React from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';
import { CartItem } from '../components/CartItem';
const Cart = () =>
	<PhotosContextConsumer>{
		({ cartItems }) => {

			const cartItemElements = cartItems.map(item =>
				<CartItem key={item.id} item={item} />);

			return (
				<main className='cart-page'>
					<h1>Check out</h1>
					{cartItemElements}
					<p className='total-cost'>Total: </p>
					<div className='order-button'>
						<button>Place Order</button>
					</div>
				</main>
			);
		}
	}
	</PhotosContextConsumer>;

export { Cart };