import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import iconMenu from '../../assets/images/icon-menu.svg';
import avatar from '../../assets/images/image-avatar.png';
import style from './Header.module.css';
import Cart from '../../component/Carts/Cart';
import Menu from '../../component/Menus/Menu';
import iconClose from '../../assets/images/icon-close.svg';

function Header({ cartList, setCartList }) {
	const [active, setActive] = useState(false);
	const [menu, setMenu] = useState(false);

	return (
		<header className={style.Header} onScroll={() => console.log('scrolled')}>
			<div className={style.container}>
				<button
					type="submit"
					className={style.menu_button}
					onClick={() => setMenu((menu) => !menu)}
				>
					<img src={menu ? iconClose : iconMenu} alt="Mobile Menu Open" />
				</button>
				<a href="#" aria-label="Go to Home Page">
					<img src={logo} alt="Sneakers" />
				</a>
				{menu && <Menu />}
				<div className={style.desktop}>
					<Menu />
				</div>
			</div>
			<div className={style.container}>
				<button type="submit" onClick={() => setActive((active) => !active)}>
					{cartList.length > 0 && (
						<span className={style.count}>{cartList[0].quantity}</span>
					)}
					<img src={cartIcon} alt="Shopping Cart Button" />
				</button>
				<button type="submit" className={style.profile}>
					<img src={avatar} alt="User Profile" />
				</button>
				{active && (
					<Cart
						cartList={cartList}
						setCartList={setCartList}
						active={active}
						setActive={setActive}
					/>
				)}
			</div>
		</header>
	);
}

Header.propTypes = {
	cartList: PropTypes.array,
	setCartList: PropTypes.func,
};

export default Header;
