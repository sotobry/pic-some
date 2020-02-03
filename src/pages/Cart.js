import React from 'react';
import { PhotosContextConsumer } from '../contexts/PhotosContext';
import { CartItem } from '../components/CartItem';
const Cart = () => {
	const [buttonText, setButtonText] = React.useState('Place Order');
	return (
		<PhotosContextConsumer>{
			({ cartItems, emptyCart }) => {

				const cartItemElements = cartItems.map(item =>
					<CartItem key={item.id} item={item} />);

				const total = (cartItems.length * 4.99).toLocaleString("en-US", { style: "currency", currency: "USD" });

				const placeOrder = () => {
					setButtonText('Ordering...');
					setTimeout(() => {
						console.log('Order placed!');
						setButtonText('Place Order');
						emptyCart();
					}, 3000);
				}
				return (
					<main className='cart-page'>
						<h1>Check out</h1>
						{cartItemElements}
						<p className='total-cost'>Total: {total}</p>
						<div className='order-button'>
							<button onClick={placeOrder}>{buttonText}</button>
						</div>
					</main>
				);
			}
		}
		</PhotosContextConsumer>
	);
};

export { Cart };