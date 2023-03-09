import React from 'react';
import productOneThumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import iconDelete from '../../assets/images/icon-delete.svg';
import style from './Cart.module.css';

function Cart() {
	return (
		<div className={style.cart}>
			<h4>Cart</h4>
			<ul className={style.cart_items_list}>
				<li className={style.cart_item}>
					<img src={productOneThumbnail} alt="Sneaker shoes" />
					<div>
						<p>Fall Limited Edition Sneakers</p>
						<p>$125.00 x 3 $375.00</p>
					</div>
					<button type="submit">
						<img src={iconDelete} alt="Delete item" />
					</button>
				</li>
				<button type="submit">Checkout</button>
			</ul>
		</div>
	);
}

export default Cart;
