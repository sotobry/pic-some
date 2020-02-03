import React from 'react';
import PropTypes from 'prop-types';
import { PhotosContextConsumer } from '../contexts/PhotosContext';
import { useHover } from '../hooks/useHover';

const CartItem = ({ item }) => {

	const { hovered: hoveredBin, ref } = useHover();


	return (
		<div className='cart-item'>
			<PhotosContextConsumer>{
				({ removeImgFromCart }) =>
					<i className={`ri-delete-bin-${hoveredBin ? 'fill' : 'line'}`}
						onClick={() => removeImgFromCart(item)}
						ref={ref}></i>
			}
			</PhotosContextConsumer>
			<img src={item.url} width='130px' alt='' />
			<p>$4.99</p>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired
	})
};
export { CartItem };