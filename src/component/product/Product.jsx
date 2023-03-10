import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './Product.module.css';
import productOne from '../../assets/images/image-product-1.jpg';
// import productTwo from '../../assets/images/image-product-2.jpg';
// import productThree from '../../assets/images/image-product-1.jpg';
// import productFour from '../../assets/images/image-product-1.jpg';

function Product({ cartList, setCartList }) {
	const [quantity, setQuantity] = useState(0);
	const handleSubmit = () => {
		const product1 = {
			id: uuidv4(),
			name: 'Fall Limited Edition Sneakers',
			price: 125,
			quantity: quantity,
			productImgUrl: '../../assets/images/image-product-1-thumbnail.jpg',
		};
		setCartList((cartList) => [...cartList, product1]);
		console.log(cartList);
	};

	return (
		<div className={style.product}>
			<img src={productOne} alt="a pair of shoes on display" />
			<div className={style.product_text}>
				<p>SNEAKER COMPANY</p>
				<h3>Fall Limited Edition Sneakers</h3>
				<p>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they&apos;ll withstand
					everything the weather can offer.
				</p>
				<div className={style.product_pricing}>
					<span>$125.00</span>
					<span>50%</span>
					<s>$250.00</s>
				</div>
				<form>
					<button
						type="button"
						onClick={() => {
							setQuantity((quantity) => (quantity === 0 ? 0 : quantity - 1));
						}}
					>
						-
					</button>
					<label htmlFor="quantity" hidden aria-hidden>
						Product Quantity
					</label>
					<input
						type="number"
						name="quantity"
						id="quantity"
						value={quantity}
						className={style.without_number}
						min={0}
						onChange={(e) => {
							setQuantity(parseInt(e.currentTarget.value));
						}}
					/>
					<button
						type="button"
						onClick={() => {
							setQuantity((quantity) => quantity + 1);
						}}
					>
						+
					</button>
				</form>
				<button
					type="submit"
					className={style.cart_button}
					onClick={handleSubmit}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

Product.propTypes = {
	cartList: PropTypes.array,
	setCartList: PropTypes.func,
};

export default Product;
