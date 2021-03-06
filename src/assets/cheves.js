export const chevesData = {
  packs: [
    {
      name: 'Pack Erdinger + vaso',
      slug: 'pack-erdinger',
      price: 200,
      image: 'images/erdinger-vaso.png',
      stock: 3,
      content: [
        {
          name: '2 Erdinger 500ml',
          slug: 'erdinger',
        },
        {
          name: '1 Vaso edición especial',
          slug: 'vaso-erdinger',
        },
      ],
    },
    {
      name: '3-Pack Patagonia',
      slug: 'pack-Patagonia',
      price: 200,
      image: 'images/pack-patagonia.png',
      stock: 1,
      content: [
        {
          name: '1 Bohemian Pilsner 730ml',
          slug: 'bohemian-pilsner',
        },
        {
          name: '1 Kune 730ml',
          slug: 'kune',
        },
        {
          name: '1 Amber Lager 730ml',
          slug: 'amber-lager',
        },
      ],
    },
    {
      name: '4-Pack Variado',
      slug: '4-pack-variado',
      price: 260,
      image: 'images/4-pack.png',
      stock: 1,
      content: [
        {
          name: '1 Xakutella',
          slug: 'xakutella',
        },
        {
          name: '1 Banana bread',
          slug: 'banana-bread',
        },
        {
          name: '1 Cafe de Olla',
          slug: 'cafe-de-olla',
        },
        {
          name: '1 Chocolate Mexicano',
          slug: 'chocolate-mexicano',
        },
      ],
    },
    {
      name: '5-Pack Rrey + vaso',
      slug: 'pack-rey-vaso',
      price: 260,
      image: 'images/rrey-pack.png',
      stock: 0,
      content: [
        {
          name: '1 London Ale',
          slug: 'london-ale',
        },
        {
          name: '1 Mty Stout',
          slug: 'mty-stout',
        },
        {
          name: '1 Kolsch',
          slug: 'kolsch',
        },
        {
          name: '1 Mexican IPA',
          slug: 'mexican-ipa',
        },
        {
          name: '1 Belgian White',
          slug: 'belgian-white',
        },
        {
          name: '1 Vaso conmemorativo Rrey',
          slug: 'vaso-rrey',
        },
      ],
    },
  ],
  cheves: [
    {
      name: 'Enjoy By 4:20',
      slug: 'enjoy-by-420',
      description:
        'A lo largo de los años se han hecho muchas versiones de Enjoy By, pero es hasta hoy que salio de modo Hazy. Como una celebración para el lúpulo, esta deliciosa DIPA turbia nos sorprende con notas a mango, melón y guayaba, con un regusto ligeramente astringente y jugoso. Seguro...',
      brewery: 'Stone Brewing Co.',
      image: 'images/enjoy-by.png',
      ingredients: 'maltas, lúpulo, levadura, agua',
      style: 'Blazy Hazy IPA',
      alcohol: 9,
      content: 355,
      price: 100,
      stock: 1,
    },
    {
      name: 'Huracan',
      slug: 'huracan',
      description:
        'Con su carga impresionante de lúpulo, esta cerveza nos expresa notas muy marcadas a mango, toronja, nísperos, chabacano y piña. El final explosivo en el regusto con caramelos y ligero amargor, harán de Huracán, una de tus cervezas favoritas.',
      brewery: 'Hercules',
      image: 'images/huracan.png',
      ingredients: 'Agua, maltas, lúpulo, levadura',
      style: 'Stout',
      alcohol: 8.6,
      content: 500,
      price: 125,
      stock: 1,
    },
    {
      name: 'Guayaba Express',
      slug: 'guayaba-express',
      description:
        'Guayaba Express nace entre amigos, uno de nuestros estilos preferidos. Milkshake IPA con un chingo de guayaba y lúpulo. Una cerveza con un fuerte aroma frutal-tropical, así como ligeras notas cítricas y herbales, un amargor de lúpulo balanceado, con presencia de guayaba y notas dulces. La sedosidad en cuerpo y regusto, es resultado de la lactosa usada para su cocción.',
      brewery: 'Fauna & Nu Cali',
      image: 'images/guayaba-express.png',
      ingredients: 'Cacao, maltas, lúpulo, levadura',
      style: 'Milkshake IPA',
      alcohol: 6.5,
      content: 473,
      price: 110,
      stock: 1,
    },
    {
      name: 'Mazorca Sonica',
      slug: 'mazorca-sonica',
      description:
        'Una cerveza artesanal potente de aroma y sabor, las notas tostadas y a cacao resaltan. Con un cuerpo ligero y muy bebible, es una cerveza refrescante y llena de carácter que mezcla bien las tonalidades del maíz para que no se pierda en un estilo ya de por sí complejo. ',
      brewery: 'Hercules',
      image: 'images/mazorca-sonica.png',
      ingredients: 'Agua, maiz, maltas, lúpulo, levadura',
      style: 'Porter',
      alcohol: 4.5,
      content: 473,
      price: 70,
      stock: 0,
    },
    {
      name: 'Xakutella',
      slug: 'xakutella',
      description:
        'Xakúa Xakutella es una cerveza estilo stout de perfil maltoso con notas a chocolate y avellanas, de amargor bajo.',
      brewery: 'Xakúa',
      image: 'images/xakutella.png',
      ingredients: 'Cacao, maltas, lúpulo, levadura',
      style: 'Stout',
      alcohol: 6,
      content: 473,
      price: 70,
      stock: 0,
    },
    {
      name: 'Banana Bread',
      slug: 'banana-bread',
      description:
        'De sabor a plátano maduro, aroma a plátano y a miel, acentuado con un toque de amargura.',
      brewery: 'Eagle Brewery',
      image: 'images/banana-bread.png',
      ingredients: 'Agua, maltas, lúpulo, levadura',
      style: 'Lager blend',
      alcohol: 5.2,
      content: 500,
      price: 75,
      stock: 0,
    },
    {
      name: 'Cafe de Olla',
      slug: 'cafe-de-olla',
      description:
        'Xakúa Café de Olla es una cerveza estilo Stout, de color negro profundo, con notas intensas a café y canela que te hará recordad momentos maravillosos entorno a una buena olla de café.',
      brewery: 'Xakúa',
      image: 'images/cafe-olla.png',
      ingredients: 'Cebada, Agua, Lúpulo, Levadura, Canela, Café',
      style: 'Stout',
      alcohol: 6,
      content: 473,
      price: 70,
      stock: 0,
    },
    {
      name: 'Chocolate Mexicano',
      slug: 'chocolate-mexicano',
      description:
        'Xakúa Chocolate Mexicano es una cerveza estilo Stout, elaborada con adiciones de cacao y canela, cerveza de color negro que presenta notas a malta tostada cacao y canela.',
      brewery: 'Xakúa',
      image: 'images/chocolate-mexicano.png',
      ingredients: 'Malta, Agua, Lúpulo, Levadura, Canela, Cacao',
      style: 'Stout',
      alcohol: 6,
      content: 473,
      price: 70,
      stock: 0,
    },
  ],
};
