import React from 'react';
import iconClose from '../../assets/images/icon-close.svg';
import style from './Menu.module.css';

function Menu() {
	return (
		<nav>
			<ul className={style.menu_mobile}>
				<li>
					<a href="#">Collections</a>
				</li>
				<li>
					<a href="#">Men</a>
				</li>
				<li>
					<a href="#">Women</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
