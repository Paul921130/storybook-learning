import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// body {
//   font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
// }
// `;
//import既有的GlobalStyles
import { GlobalStyles } from '../src/styles/global';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
