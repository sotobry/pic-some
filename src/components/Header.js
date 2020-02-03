import React from 'react';
import { Link } from 'react-router-dom';
import { PhotosContextConsumer } from '../contexts/PhotosContext';


const Header = () =>
	<PhotosContextConsumer>{
		({ cartItems }) =>
			<header>
				<Link to='/'><h1>Pic Some</h1></Link>
				<Link to='/cart'>
					<i className={`ri-fw ri-2x 
					ri-shopping-cart-${cartItems.length ?
							'fill' :
							'line'}`
					}></i>
				</Link>
			</header >
	}
	</PhotosContextConsumer>

export { Header };