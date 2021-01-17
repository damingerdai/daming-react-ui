import React from 'react';

import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';
import { SearchBar } from './SearchBar';

const PRODUCTS = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function dedupe(array) {
    return Array.from(new Set(array));
}

export class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: PRODUCTS,
            value: '',
            checked: false
        };
        this.onSearchBarValueChange = this.onSearchBarValueChange.bind(this);
        this.onSearchBarRadioChange = this.onSearchBarRadioChange.bind(this);
    }

    onSearchBarValueChange(value) {
        this.setState({ value });
        if (value) {
            const products = this.state.products;
            this.setState({
                products: products.filter(p => p.name.indexOf(value) !== -1)
            });
        } else {
            const { products, checked } = this.state;
            if (checked) {
                this.setState({
                    products: products.filter(p => p.stocked === true)
                });
            } else {
                this.setState({
                    products: PRODUCTS
                });
            }
        }

    }

    onSearchBarRadioChange(checked) {
        this.setState({ checked: Boolean(checked) })
        const products = this.state.products;
        if (checked) {
            this.setState({
                products: products.filter(p => p.stocked === true)
            });
        } else {
            this.setState({
                products: products
            });
        }
    }

    render() {
        const header = <div>
            <span>Name</span>
            <span>Price</span>
        </div>;
        const products = this.state.products || [];
        return (
            <div>
                <SearchBar onSearchBarValueChange={this.onSearchBarValueChange} onSearchBarRadioChange={this.onSearchBarRadioChange} />
                {header}
                <div>
                    {
                        dedupe(products.map(p => p.category))
                            .map(c => (
                                <div key={c}>
                                    <ProductCategoryRow category={c} />
                                    {
                                        products.filter(p => p.category === c)
                                            .map(p =>
                                                <ProductRow key={p.name} name={p.name} price={p.price} />
                                            )
                                    }
                                </div>

                            ))
                    }
                </div>
            </div>
        )
    }
}