import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, CartsBookCard } from "../../store/slices/cartSlice";
import "./style.scss";
import { ReduxStore } from "store/root";
import { useNavigate } from "react-router-dom";

export interface BookCard {
  isbn13: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;
}

function Card({ isbn13, image, title, subtitle, price }: BookCard) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state: ReduxStore) => state.cart.books);

  const isBookInCart = books.some((book) => book.title === title);

  const addBookToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const book: CartsBookCard = {
      isbn13,
      image,
      title,
      subtitle,
      price,
      quantity: 1,
    };
    dispatch(addBook(book));
  };

  const handleBookClick = () => {
    navigate(`/book/${isbn13}`);
  };

  return (
    <li className="card" onClick={handleBookClick}>
      <div className="card__wrapper">
        <img className="card__image" src={image} alt={title} />
        <h2 className="card__title">{title}</h2>
        <p className="card__type">{subtitle}</p>
        <div className="card__lower">
          <h2 className="card__price">{price} ₽</h2>
          <button
            disabled={isBookInCart}
            className="card__button"
            onClick={addBookToCart}
          >
            {isBookInCart ? "Уже в корзине" : "В корзину"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Card;
