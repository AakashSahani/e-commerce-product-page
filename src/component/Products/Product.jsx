import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './Product.module.css';
import productOne from '../../assets/images/image-product-1.webp';
import productTwo from '../../assets/images/image-product-2.webp';
import productThree from '../../assets/images/image-product-3.webp';
import productFour from '../../assets/images/image-product-4.webp';
import productOneThumbnail from '../../assets/images/image-product-1-thumbnail.webp';
import productTwoThumbnail from '../../assets/images/image-product-2-thumbnail.webp';
import productThreeThumbnail from '../../assets/images/image-product-3-thumbnail.webp';
import productFourThumbnail from '../../assets/images/image-product-4-thumbnail.webp';
import ProductImage from '../ProductImage/ProductImage';

function Product({ cartList, setCartList }) {
	const [quantity, setQuantity] = useState(0);
	const [productMain, setProductMain] = useState(productOne);
	const [imageView, setImageView] = useState(false);
	const handleSubmit = () => {
		const product1 = {
			id: uuidv4(),
			name: 'Fall Limited Edition Sneakers',
			price: 125,
			quantity: quantity,
			productImgUrl: '/assets/images/image-product-1-thumbnail.webp',
		};
		const index = cartList.findIndex((cart) => cart.name === product1.name);
		const newList = [...cartList];
		if (product1.quantity > 0) {
			if (index > -1) {
				newList[index] = product1;
				setCartList((cartList) => newList);
			} else {
				setCartList((cartList) => [...cartList, product1]);
			}
		}
	};
	const switchImage = (key) => {
		const listitem = document.querySelectorAll('li.active');
		listitem.forEach((li) => li.classList.remove('active'));
		document.getElementById(`list${key}`).classList.add('active');
		switch (key) {
			case 1:
				setProductMain(productOne);
				break;
			case 2:
				setProductMain(productTwo);
				break;
			case 3:
				setProductMain(productThree);
				break;
			case 4:
				setProductMain(productFour);
				break;
			default:
				setProductMain(productOne);
				break;
		}
	};
	return (
		<section className={style.product}>
			<div className={style.product_image}>
				<img
					src={productMain}
					alt="a pair of shoes on display"
					onClick={() => setImageView(!imageView)}
				/>
				<ul className={style.product_image_list}>
					<li id="list1" onClick={() => switchImage(1)} className="active">
						<img src={productOneThumbnail} alt="a pair of shoes" />
					</li>
					<li id="list2" onClick={() => switchImage(2)}>
						<img src={productTwoThumbnail} alt="a pair of shoes" />
					</li>
					<li id="list3" onClick={() => switchImage(3)}>
						<img src={productThreeThumbnail} alt="a pair of shoes" />
					</li>
					<li id="list4" onClick={() => switchImage(4)}>
						<img src={productFourThumbnail} alt="a pair of shoes" />
					</li>
				</ul>
			</div>
			<div className={style.product_hide}>
				<ProductImage />
			</div>
			{imageView && (
				<ProductImage imageView={imageView} setImageView={setImageView} />
			)}
			<div className={style.product_text}>
				<h3>SNEAKER COMPANY</h3>
				<h4>Fall Limited Edition Sneakers</h4>
				<p>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they&apos;ll withstand
					everything the weather can offer.
				</p>
				<div className={style.product_pricing}>
					<div>
						<span className={style.price}>$125.00</span>
						<span className={style.discount}>50%</span>
					</div>
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
		</section>
	);
}

Product.propTypes = {
	cartList: PropTypes.array,
	setCartList: PropTypes.func,
};

export default Product;
