import React,{useState} from 'react';
import '../styles/Header.scss';
import Menu from "../components/Menu";
const Header = () => {
	const [toogle, setToogle] = useState(false);
	const handleToogle = () =>{
		setToogle(!toogle);
	}
	return (
		<nav>
			<img src="./logos/icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToogle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{!!toogle && <Menu />}
		</nav>
	);
}

export default Header;