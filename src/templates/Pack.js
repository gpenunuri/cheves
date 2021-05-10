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

export default function SinglePackPage({ pathContext }) {
  const pack = pathContext;
  return (
    <BeerPageStyles>
      <Link to="/" className="link">
        &larr;Volver al inicio
      </Link>
      <div className="beer__wrapper">
        <div className="beer__image-wrapper">
          <img src={`/${pack.image}`} className="beer__image" alt="pack.name" />
        </div>
        <div className="beer__info">
          <h1 className="beer__title">{pack.name}</h1>
          <p className="beer__price">
            Precio: <span>${pack.price}</span>
          </p>

          <p className="beer__content">
            Contenido:{' '}
            <span>{pack.content.map((el) => el.name).join(', ')}</span>
          </p>

          <p className="beer__stock">
            Existencias: <span>{pack.stock != 0 ? pack.stock : 'Agotado'}</span>
          </p>

          <p className="beer__description">{pack.description}</p>
        </div>
      </div>
    </BeerPageStyles>
  );
}
