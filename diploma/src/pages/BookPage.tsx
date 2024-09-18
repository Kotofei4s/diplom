import Card, { BookCard } from "components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookCard | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.itbook.store/1.0/books/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBook(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : book ? <Card {...book} /> : <></>}
    </div>
  );
};

export default BookPage;
