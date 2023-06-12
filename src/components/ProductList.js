import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    const handleDelete = (id) => {
        // Gọi API xóa dòng với id tương ứng
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // Xóa dòng thành công, cập nhật danh sách sản phẩm
                    setProducts(products.filter(product => product.id !== id));
                } else {
                    console.log('Failed to delete the product.');
                }
            })
            .catch(error => console.log(error));
    };

    return (


        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    <button onClick={() => handleDelete(product.id)}>Xóa</button>
                </li>
            ))}
        </ul>

    );
};

export default ProductList;