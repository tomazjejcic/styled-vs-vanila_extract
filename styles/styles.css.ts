import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'red'
  },
  font: {
    body: 'arial'
  }
});

export const exampleStyle = style({
  backgroundColor: 'blue',
  // backgroundColor: vars.color.brand,
  color: 'white',
  padding: 10
});