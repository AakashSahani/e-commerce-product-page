import React from 'react';
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import menuIcon from '../../assets/images/icon-menu.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import style from './Header.module.css';

function Header() {
	return (
		<header className={style.Header}>
			<button type="submit">
				<img src={menuIcon} alt="Mobile Menu Open" />
			</button>
			<a href="#" aria-label="Go to Home Page">
				<img src={logo} alt="Sneakers" />
			</a>
			<button type="submit">
				<img src={cartIcon} alt="Shopping Cart Button" />
			</button>
		</header>
	);
}

export default Header;
