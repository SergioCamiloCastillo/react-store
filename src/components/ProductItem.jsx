import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import { Fade } from "react-awesome-reveal";
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);
	const handleClick = (item) => {
		addToCart(item);
		console.log(item);
	}
	return (
		<div className="ProductItem" >
			<Fade duration={1000}>

				<img src={product.images[0]} alt={product.title} /></Fade>
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
					<img src="./icons/bt_add_to_cart.svg" alt="" />
				</figure>

			</div>

		</div>
	);
}

export default ProductItem;