import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Layout/Header/Header';
import Product from './component/Product/Product';
// import Products from './data/Products';

function App() {
	// const [productList, setProductList] = useState(Products);
	const [cartList, setCartList] = useState([]);
	return (
		<>
			<Header cartList={cartList} setCartList={setCartList} />
			<Product cartList={cartList} setCartList={setCartList} />
		</>
	);
}

export default App;
