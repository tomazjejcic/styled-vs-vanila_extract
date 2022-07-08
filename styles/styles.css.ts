import { createTheme, style, globalStyle } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    color: {
        brand: 'red',
        greencolor: 'green'
    },
    font: {
        body: 'arial'
    }
});

export const title = style({
    color: vars.color.greencolor,
    background: 'lightgreen',
    margin: 0,
    textAlign: 'center',
    padding: '10px',
});

export const container = style({
    display: 'flex',
    marginTop: '8px',
});

export const navigation = style({
    color: 'green',
    background: 'lightyellow',
    minWidth: '300px'
});

export const filterWrapper = style({
    background: 'lightgrey',
    padding: '8px',
    fontSize: '16px'
});

export const filterTitle = style({
    color: 'green',
    margin: 0,
    padding: '10px',
    textAlign: 'center'
});

export const filterItem = style({
    background: 'white',
    color: 'blue',
    margin: '4px',
    padding: '4px'
});

export const productList = style({
    background: 'lightblue',
    display: 'grid',
    gridRow: 'auto',
    gap: '4px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    fontSize: '22px',
    lineHeight: '24px',
    listStyle: 'none',
});

globalStyle(`${productList} > *`, {
    border: '1px solid red',
});

export const productItem = style({
    margin: '8px',
    padding: '4px'
});

export const productItemOpacity3 = style({
    backgroundColor: 'rgba(0, 0, 0, .3)',

});

export const productItemOpacity5 = style({
    backgroundColor: 'rgba(0, 0, 0, .5)',
});

export const productItemOpacity7 = style({
    backgroundColor: 'rgba(0, 0, 0, .7)',
});

export const productItemOpacity9 = style({
    backgroundColor: 'rgba(0, 0, 0, .9)',
});

export const productItemOpacity0 = style({
    backgroundColor: 'rgba(0, 0, 0, .0)',
});

export const productItemTitle = style({
    background: 'lightgreen',
    height: '48px',
    overflow: 'hidden',
});

export const productId = style({
    padding: '15px',
    color: 'white',
    textAlign: 'right',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
});

export const itemImage = style({
    width: '100%'
});

export const priceContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px'
});

export const priceStyle = style({
    color: 'white',
});

export const priceStyleDiscounted = style({
    background: 'blue',
    border: 'solid darkviolet 5px',
    color: 'red',
    padding: '4px',
    borderRadius: '20%'
});

export const priceStyleCrossed = style({
    color: 'white',
    textDecorationLine: 'line-through'
});

export const brandKeyWrapper = style({
    background: 'red',
    padding: '8px',
    border: 'solid darkred 3px'
});

export const brandKey = style({
    position: 'relative',
    color: 'white',
    fontSize: '8px',
    margin: '0 8px',
    textAlign: 'center',
    backgroundColor: 'darkred'
});

export const arrowLeft = style({
    position: 'absolute',
    left: 0,
    top: 0,
    borderTop: '12px solid red',
    borderRight: '12px solid transparent',
    borderBottom: '12px solid red',
});

export const arrowRight = style({
    position: 'absolute',
    right: 0,
    top: 0,
    borderTop: '12px solid red',
    borderLeft: '12px solid transparent',
    borderBottom: '12px solid red',
});
