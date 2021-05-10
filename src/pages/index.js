import React from 'react';
import styled from 'styled-components';
import BeerItem from '../components/BeerItem';
import PackItem from '../components/PackItem';
import { chevesData } from '../assets/cheves';

const ChevesList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  margin: 0 auto;
  max-width: 70rem;

  h1 {
    font-size: 22px;
  }
`;

const PacksList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 0 2rem;
  margin: 0 auto;
  max-width: 70rem;

  h1 {
    font-size: 22px;
  }
`;

export default function Home() {
  const { cheves, packs } = chevesData;
  console.log(cheves, packs);
  return (
    <>
      <PacksList>
        <h1>Packs:</h1>
        {packs.map((pack) => (
          <PackItem pack={pack} />
        ))}
      </PacksList>
      <ChevesList>
        <h1>Cheves:</h1>
        {cheves.map((cheve) => (
          <BeerItem beer={cheve} />
        ))}
      </ChevesList>
    </>
  );
}
