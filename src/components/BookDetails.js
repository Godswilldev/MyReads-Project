import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { get } from "../BooksAPI";

const BookDetailsStyles = styled.div`
  padding: 3rem 5rem;
  color: #e8e8e8;

  @media (max-width: 1024px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
  }

  strong {
    color: #0ab1ff;
  }

  .book {
    &__header {
      display: flex;
      justify-content: space-between;

      @media (max-width: 1024px) {
        flex-direction: column;

        .title {
          display: flex;
          justify-content: space-between;

          @media (max-width: 480px) {
            margin-top: 2rem;
            flex-direction: column;
          }
        }
      }
    }

    &__description {
      text-align: justify;
      line-height: 1.5;
      letter-spacing: 0.1rem;
      margin-top: 5rem;

      @media (max-width: 480px) {
        line-height: 1;
        letter-spacing: 1px;
        margin-top: 2rem;
      }
    }
    &__moreInfo {
      color: #c7b107;
    }
  }

  @media (max-width: 1024px) {
  }

  Button {
    margin-bottom: 4rem;
  }
`;

const BookDetails = (props) => {
  const [books, setBooks] = useState({});
  const { id } = useParams();

  useEffect(() => {
    get(id).then((res) => setBooks(res));
  }, [id]);

  return (
    <BookDetailsStyles>
      <Button
        variant="contained"
        color="primary"
        onClick={props.history.goBack}
      >
        Go Back
      </Button>
      <div className="book__header">
        <div
          className="book-cover"
          style={{
            width: 300,
            height: 400,
            backgroundImage: `url(${books.imageLinks?.thumbnail})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="title">
          <div>
            <p>
              <strong>Title:</strong> {books.title}
            </p>

            <p>
              <strong>Subtitle: </strong>
              {books.subtitle ? books.subtitle : "No subtitle"}
            </p>

            <div className="book-authors">
              <strong>Authors: </strong>
              {books.authors &&
                books.authors.map((author, index) => (
                  <span key={index}> {author}, </span>
                ))}
            </div>

            <p>
              <strong>Categories:</strong>
              {books.categories?.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </p>
          </div>

          <div className="averageRating">
            <p>
              <strong>Average Rating:</strong> {books.averageRating}
            </p>

            <p>
              <strong>Shelf:</strong> {books.shelf}
            </p>

            <p>
              <strong>Number of Pages:</strong> {books.pageCount}
            </p>

            <p>
              <strong>Publisher:</strong> {books.publisher}
            </p>
            <a className="book__moreInfo" href={books.infoLink}>
              More Info
            </a>
          </div>
        </div>
      </div>

      <p className="book__description">
        <strong>Description:</strong> {books.description}
      </p>
    </BookDetailsStyles>
  );
};

export default BookDetails;
