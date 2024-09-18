import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import basketImage from "../../image/basket.png";
import Modal from "../Modal";
import {
  CartsBookCard,
  decrementQuantity,
  incrementQuantity,
  removeBook,
  clearCart,
} from "store/slices/cartSlice";
import "./style.scss";

const Cart = () => {
  const dispatch = useDispatch();

  const books = useSelector(
    (state: { cart: { books: CartsBookCard[] } }) => state.cart.books
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button className="header__busket" onClick={openModal}>
        <img className="header__img" src={basketImage} alt="image" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="cart">
          <h2>Корзина</h2>
          {!!books.length && (
            <button
              className="cart__clear-button"
              onClick={() => dispatch(clearCart())}
            >
              Очистить корзину
            </button>
          )}
          {books.length ? (
            <ul className="cart__list">
              {books.map((book) => (
                <li key={book.title} className="cart__item">
                  <div className="cart__details">
                    <img
                      className="cart__image"
                      src={book.image}
                      alt={book.title}
                    />
                    <div className="cart__info">
                      <h3 className="cart__title">{book.title}</h3>
                      <p className="cart__subtitle">{book.subtitle}</p>
                      <p className="cart__price">{book.price} ₽</p>
                    </div>
                  </div>
                  <div className="cart__actions">
                    <button
                      onClick={() => dispatch(decrementQuantity(book.title))}
                    >
                      -
                    </button>
                    <span>{book.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(book.title))}
                    >
                      +
                    </button>
                    <button onClick={() => dispatch(removeBook(book.title))}>
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            "Вы еще не добавили книги в корзину"
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
