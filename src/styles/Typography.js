import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  html {
    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
`;

export default Typography;
