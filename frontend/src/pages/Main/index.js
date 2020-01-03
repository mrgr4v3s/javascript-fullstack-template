import React, { Component } from "react";
import api from "../../services/api";

import '../../components/ProductList/styles.css'

import ProductList from "../../components/ProductList";

export default class Main extends Component {
    state = {
        products: [],
        productsInfo: {},
        page: 1
    };

    render() {
        const { products, productsInfo, page } = this.state;

        return <ProductList page={ page }
                         pages={ productsInfo.pages }
                         products={ products}
                         onPreviousPage={this.prevPage}
                         onNextPage={this.nextPage} />

    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productsInfo } = response.data;

        this.setState({
            ...this.state,
            products: docs,
            productsInfo,
            page
        });
    };

    prevPage = () => {
        const { page } = this.state;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    };

    nextPage = () => {
        const { page } = this.state;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }
}