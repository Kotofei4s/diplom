/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate instead of useHistory
import Card from "../Card";
import Pagination from "../Pagination";
import { addBooks } from "store/slices/booksSlice";
import { ReduxStore } from "store/root";
import "./style.scss";

function CardList() {
  const dispatch = useDispatch();
  const books = useSelector((state: ReduxStore) => state.books.books);
  const navigate = useNavigate(); // Use useNavigate
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [searchedValue, setSearchedValue] = useState<string>("");

  // Get the current page from URL
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page") || "1", 10);

  const renderedCards = books.filter(({ title }: { title: string }) =>
    title.toLowerCase().includes(searchedValue.toLowerCase())
  );

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.itbook.store/1.0/search/love?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addBooks(data.books.slice(0, 9)));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  const onChangePage = (number: number) => {
    // Navigate to the new page
    navigate(`?page=${number}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchedValue(value);
  };

  return (
    <div>
      <input
        className="search_input"
        placeholder="Search"
        type="text"
        id="name"
        onChange={onChange}
      />
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : (
        <ul className="book_list">
          {renderedCards.map((card) => (
            <Card {...card} key={card.title} />
          ))}
        </ul>
      )}
      <Pagination currentPage={currentPage} onClick={onChangePage} />
    </div>
  );
}

export default CardList;
