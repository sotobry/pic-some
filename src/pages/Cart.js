import React from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';
import { CartItem } from '../components/CartItem';
const Cart = () =>
	<PhotosContextConsumer>{
		({ cartItems }) => {

			const cartItemElements = cartItems.map(item =>
				<CartItem key={item.id} item={item} />);

			const total = (cartItems.length * 4.99).toLocaleString("en-US", { style: "currency", currency: "USD" });
			return (
				<main className='cart-page'>
					<h1>Check out</h1>
					{cartItemElements}
					<p className='total-cost'>Total: {total}</p>
					<div className='order-button'>
						<button>Place Order</button>
					</div>
				</main>
			);
		}
	}
	</PhotosContextConsumer>;

export { Cart };