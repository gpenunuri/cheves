import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BeerPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  .beer__wrapper {
    display: flex;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  .beer__image-wrapper {
    max-width: 400px;
  }
  .beer-title {
    font-size: 2rem;
  }

  .beer__info {
    @media (min-width: 600px) {
      padding: 0 2rem;
    }
  }

  .beer__price {
    font-size: 16px;
  }

  .beer__description {
    font-size: 16px;
  }

  .beer__abv {
    font-size: 16px;
  }

  .beer__brewery {
    font-size: 16px;
  }

  .beer__ingredients {
    font-size: 16px;
  }

  .beer__content {
    font-size: 16px;

    span {
      font-size: 14px;
    }
  }

  .beer__stock {
    font-size: 16px;
  }

  .link {
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;

export default function SingleBeerPage({ pathContext }) {
  const cheve = pathContext;
  return (
    <BeerPageStyles>
      <Link to="/" className="link">
        &larr;Volver al inicio
      </Link>
      <div className="beer__wrapper">
        <div className="beer__image-wrapper">
          <img
            src={`/${cheve.image}`}
            className="beer__image"
            alt="cheve.name"
          />
        </div>
        <div className="beer__info">
          <h1 className="beer__title">{cheve.name}</h1>
          <p className="beer__price">
            Precio: <span>${cheve.price}</span> &nbsp;-&nbsp; Contenido:
            <span>&nbsp;{cheve.content}ml</span>
          </p>
          <p className="beer__description">{cheve.description}</p>
          <p className="beer__abv">
            ABV: <span>{cheve.alcohol}%</span>
          </p>
          <p className="beer__brewery">
            Cervecería: <span>{cheve.brewery}</span>
          </p>
          <p className="beer__ingredients">Ingredientes: {cheve.ingredients}</p>
          <p className="beer__stock">
            Existencias: {cheve.stock != 0 ? cheve.stock : 'Agotado'}
          </p>
        </div>
      </div>
    </BeerPageStyles>
  );
}
