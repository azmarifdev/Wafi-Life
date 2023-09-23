import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Price from '../Price/Price';
import './Shop.css';

const Shop = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);
    return (
        <div className="shop-component">
            <div className="book-component">
                {books.length}
                {books.map((book) => (
                    <Books key={book.id} book={book} />
                ))}
            </div>
            <div className="price-component">
                <Price />
            </div>
        </div>
    );
};

export default Shop;
