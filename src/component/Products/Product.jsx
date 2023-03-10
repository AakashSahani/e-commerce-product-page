import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './Product.module.css';
import productOne from '../../assets/images/image-product-1.webp';
import productTwo from '../../assets/images/image-product-2.webp';
import productThree from '../../assets/images/image-product-3.webp';
import productFour from '../../assets/images/image-product-4.webp';

function Product({ cartList, setCartList }) {
	const [quantity, setQuantity] = useState(0);
	const handleSubmit = () => {
		const product1 = {
			id: uuidv4(),
			name: 'Fall Limited Edition Sneakers',
			price: 125,
			quantity: quantity,
			productImgUrl: '../../assets/images/image-product-1-thumbnail.webp',
		};
		const index = cartList.findIndex((cart) => cart.name === product1.name);
		const newList = [...cartList];
		if (index > -1) {
			newList[index] = product1;
			setCartList((cartList) => newList);
		} else {
			setCartList((cartList) => [...cartList, product1]);
		}
	};

	return (
		<div className={style.product}>
			<div className={style.product_image}>
				<img src={productOne} alt="a pair of shoes on display" />
				<ul className={style.product_image_list}>
					<li>
						<img src={productOne} alt="a pair of shoes" />
					</li>
					<li>
						<img src={productTwo} alt="a pair of shoes" />
					</li>
					<li>
						<img src={productThree} alt="a pair of shoes" />
					</li>
					<li>
						<img src={productFour} alt="a pair of shoes" />
					</li>
				</ul>
			</div>
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
				<div className={style.form_container}>
					<form>
						<button
							type="button"
							onClick={() => {
								setQuantity((quantity) => (quantity === 0 ? 0 : quantity - 1));
							}}
						>
							-
						</button>
						<input
							type="number"
							aria-label="Product Quantity"
							name="quantity"
							id="quantity"
							title="Product Quantity"
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
		</div>
	);
}

Product.propTypes = {
	cartList: PropTypes.array,
	setCartList: PropTypes.func,
};

export default Product;
