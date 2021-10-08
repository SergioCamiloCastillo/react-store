import React,{useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from "axios";
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
		setLoading(false);
	}, []);
	return (
		<section className="main-container">
			<div className="ProductList">
				{!!loading && <h1>Cargando...</h1>}
				{products.map(product => (
					<ProductItem />
				))}
				
			</div>
		</section>
	);
}

export default ProductList;