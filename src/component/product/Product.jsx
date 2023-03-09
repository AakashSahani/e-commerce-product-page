import React, { useState } from 'react';
import style from './Product.module.css';
import productOne from '../../assets/images/image-product-1.jpg';
import productTwo from '../../assets/images/image-product-2.jpg';
import productThree from '../../assets/images/image-product-1.jpg';
import productFour from '../../assets/images/image-product-1.jpg';

function Product() {
	const [quantity, setQuantity] = useState(0);

	return (
		<div className={style.product}>
			<img src={productOne} alt="a pair of shoes on display" />
			<div className={style.product_text}>
				<div className="company">SNEAKER COMPANY</div>
				<h3>Fall Limited Edition Sneakers</h3>
				<p>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they'll withstand everything
					the weather can offer.
				</p>
				<div>
					<span>$125.00</span>
					<span>50%</span>
					<span>$250.00</span>
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
					<label htmlFor="quantity" hidden>
						Product Quantity
					</label>
					<input type="number" name="quantity" value={quantity} id="quantity" />
					<button
						type="button"
						onClick={() => {
							setQuantity((quantity) => quantity + 1);
						}}
					>
						+
					</button>
				</form>
				<button type="submit">Add to cart</button>
			</div>
		</div>
	);
}

export default Product;
