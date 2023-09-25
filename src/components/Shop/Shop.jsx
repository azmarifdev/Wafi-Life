import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Price from '../Price/Price';
import './Shop.css';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [price, setPrice] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    const addtocart = (cart)=> {
        console.log(cart);
    }

    return (
        <div className="shop-component">
            <div className="book-component">
                {books.map((book) => (
                    <Books
                        key={book.id}
                        book={book} 
                        addtocart={addtocart}></Books>
                ))}
            </div>
            <div className="price-component">
                <Price />
            </div>
        </div>
    );
};

export default Shop;
