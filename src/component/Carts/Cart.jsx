import React from 'react';
import PropTypes from 'prop-types';
import style from './Cart.module.css';
import CartItem from '../../Layout/CartItems/CartItem';

function Cart({ cartList, setCartList }) {
	return (
		<div className={style.cart} id="cart">
			<h4>Cart</h4>
			<ul className={style.cart_item_list}>
				{cartList.length === 0 ? (
					<li className={style.empty}>Your cart is empty.</li>
				) : (
					cartList.map((cartItem) => (
						<CartItem
							key={cartItem.id}
							cartList={cartList}
							setCartList={setCartList}
							cartItem={cartItem}
						/>
					))
				)}
			</ul>
			<button type="submit" className={style.checkout_button}>
				Checkout
			</button>
		</div>
	);
}

Cart.propTypes = {
	cartList: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.string,
			PropTypes.string,
			PropTypes.number,
			PropTypes.string,
			PropTypes.number
		)
	),
	setCartList: PropTypes.func,
};

export default Cart;
