import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import ProductList from '../components/ProductList';

function Product() {
    return (
        <div className="home">
            <h1>My App</h1>
            <ProductList />
        </div>
    );
}

export default Product;
