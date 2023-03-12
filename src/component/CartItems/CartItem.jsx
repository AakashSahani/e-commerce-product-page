import React from 'react';
import PropTypes from 'prop-types';
import style from './CartItem.module.css';
import iconDelete from '../../assets/images/icon-delete.svg';

function CartItem({ cartItem, setCartList, cartList }) {
	const handleClick = () => {
		const cartIndex = cartList.findIndex((item) => item.id === cartItem.id);
		const newCartList = cartList.filter((list, index) => index != cartIndex);
		setCartList(newCartList);
	};
	const handleImgPath = (name) => {
		return new URL(`../../assets/images/${name}.webp`, import.meta.url).href;
	};
	return (
		<li className={style.cart_item}>
			<img
				src={`${handleImgPath(cartItem.productImgName)}`}
				alt="Sneaker shoes"
			/>
			<div>
				<p>{cartItem.name}</p>
				<p>
					${cartItem.price} x {cartItem.quantity}
					<strong> ${cartItem.price * cartItem.quantity}</strong>
				</p>
			</div>
			<button type="submit" onClick={handleClick}>
				<img src={iconDelete} alt="Delete item" />
			</button>
		</li>
	);
}

CartItem.propTypes = {
	cartItem: PropTypes.object,
	cartList: PropTypes.array,
	setCartList: PropTypes.func,
};

export default CartItem;
