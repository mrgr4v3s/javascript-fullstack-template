import React from "react";
import {Link} from "react-router-dom";

const ProductList = ({ products, page, pages, onPreviousPage, onNextPage }) => (
    <div className="product-list">
        {products.map(product => (
            <article key={product._id}>
                <strong>{ product.title }</strong>

                <p>{ product.description }</p>

                <Link to={`/products/${product._id}`}>Details</Link>
            </article>
        ))}

        <div className="actions">
            <button disabled={page === 1} onClick={onPreviousPage}>Previous Page</button>
            <button disabled={page === pages} onClick={onNextPage}>Next Page</button>
        </div>
    </div>
);

export default ProductList;