import React from 'react';
import { useState } from 'react';
import style from './ProductImage.module.css';
import productOne from '/src/assets/images/image-product-1.webp';
import productTwo from '/src/assets/images/image-product-2.webp';
import productThree from '/src/assets/images/image-product-3.webp';
import productFour from '/src/assets/images/image-product-4.webp';
import productOneThumbnail from '/src/assets/images/image-product-1-thumbnail.webp';
import productTwoThumbnail from '/src/assets/images/image-product-2-thumbnail.webp';
import productThreeThumbnail from '/src/assets/images/image-product-3-thumbnail.webp';
import productFourThumbnail from '/src/assets/images/image-product-4-thumbnail.webp';
function ProductImage({ setImageView }) {
	const [lightBoxImage, setLightBoxImage] = useState(productOne);
	const [imgPos, setImgPos] = useState(1);
	const switchImage = (key) => {
		const listitem = document.querySelectorAll('li.active');
		listitem.forEach((li) => li.classList.remove('active'));
		(key > 0) & (key < 5) &&
			document.getElementById(`list${key}`).classList.add('active');

		switch (key) {
			case 0:
				setLightBoxImage(productFour);
				setImgPos(4);
				break;
			case 1:
				setLightBoxImage(productOne);
				setImgPos(1);
				break;
			case 2:
				setLightBoxImage(productTwo);
				setImgPos(2);
				break;
			case 3:
				setLightBoxImage(productThree);
				setImgPos(3);
				break;
			case 4 || 0:
				setLightBoxImage(productFour);
				setImgPos(4);
				break;
			default:
				setLightBoxImage(productOne);
				setImgPos(1);
				break;
		}
	};
	return (
		<section className={style.image}>
			<div className={style.close}>
				<button type="submit" onClick={() => setImageView(false)}>
					<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fill="#69707D"
							fillRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div className={style.image_container}>
				<button type="submit" onClick={() => switchImage(imgPos - 1)}>
					{'<'}
				</button>
				<img src={lightBoxImage} alt="Image of Shoes" />
				<button type="submit" onClick={() => switchImage(imgPos + 1)}>
					{'>'}
				</button>
			</div>
			<ul className={style.image_list}>
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
		</section>
	);
}

export default ProductImage;
