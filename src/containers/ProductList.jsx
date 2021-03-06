import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import { useGetProducts } from "../hooks/useGetProducts"

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {

	const { products, isLoading } = useGetProducts(API);

	return (
		<section className="main-container" >
			<div className="ProductList">
				{!!isLoading && <h1>Cargando...</h1>}
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}

			</div>
		</section>
	);
}

export default ProductList;