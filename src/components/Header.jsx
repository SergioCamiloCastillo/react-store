import React,{useState,useContext} from 'react';
import '../styles/Header.scss';
import Menu from "../components/Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
const Header = () => {
	const [toogle, setToogle] = useState(false);
	const [toogleOrders, setToogleOrders] = useState(false);
	const { state } = useContext(AppContext);
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
					<li className="navbar-shopping-cart" onClick={() => setToogleOrders(!toogleOrders)}>
						<img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> :null}
					</li>
				</ul>
			</div>
			{!!toogle && <Menu />}
			{toogleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;