import './Books.css'

const Books = (props) =>
{
    const id = props.book.id;
    const name = props.book.name;
    const img = props.book.img;
    const price = props.book.price;
    const book = props.book;
    // console.log(id, name, img);
    // console.log(price);

    return (
        <div className='book'>
            <img src={img} />
            <h3>{name}</h3>
            <p className="price">Price {price}</p>
            <button onClick={()=> {props.addtocart({book})}} className='button-book'>Add to cart</button>
        </div>
    );
};

export default Books;
