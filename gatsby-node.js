import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';
import { chevesData } from './src/assets/cheves.js';

async function turnBeersIntoPages({ actions }) {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/Beer.js');

  chevesData.cheves.forEach((cheve) => {
    const beerPath = `cheves/${cheve.slug}`;
    createPage({
      path: beerPath,
      component: template,
      context: cheve,
    });
  });
}

async function turnPacksIntoPages({ actions }) {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/Pack.js');

  chevesData.packs.forEach((pack) => {
    const packPath = `packs/${pack.slug}`;
    createPage({
      path: packPath,
      component: template,
      context: pack,
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnBeersIntoPages(params), turnPacksIntoPages(params)]);
}
