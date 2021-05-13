import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const BeerItemStyles = styled.div`
  margin: 2rem auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .beer__title {
    font-size: 18px;
  }

  .beer__info {
    padding: 1rem 1rem;
  }

  .beer__price {
    font-size: 14px;
    font-weight: bold;

    span {
      font-weight: normal;
    }
  }

  .beer__content {
    font-size: 14px;
    font-weight: bold;

    span {
      font-weight: normal;
    }
  }

  .beer__image {
    max-width: 120px;
  }

  .beer__link {
    font-size: 14px;
    color: #333;
    text-decoration: none;
    background-color: var(--yellow);
    padding: 1.2rem 2.4rem;
    border-radius: 0.8rem;
    margin-right: 1.4rem;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .beer__link--2 {
    display: none;
    @media (max-width: 700px) {
      display: inline-block;
    }
  }
`;

const PackItem = ({ pack }) => {
  console.log(pack);
  return (
    <BeerItemStyles>
      <img src={pack.image} alt={pack.name} className="beer__image" />
      <div className="beer__info">
        <h2 className="beer__title">{pack.name}</h2>
        <p className="beer__price">
          Precio: <span>${pack.price}</span>
        </p>
        <p className="beer__content">
          Contenido: <span>{pack.content.map((el) => el.name).join(', ')}</span>
        </p>
        <p className="beer__content">
          Existencias: <span>{pack.stock}</span>
        </p>
        <Link to={`/packs/${pack.slug}`} className="beer__link beer__link--2">
          Ver más
        </Link>
      </div>
      <Link to={`/packs/${pack.slug}`} className="beer__link">
        Ver más
      </Link>
    </BeerItemStyles>
  );
};

export default PackItem;
