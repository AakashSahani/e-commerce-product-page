import React from 'react';
import './App.css';
import { useState } from 'react';
import Product from './component/Products/Product';
import Header from './Layout/Headers/Header';

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
