import styled from "styled-components";

import { ProductListData } from "../data/productListData"

const Container = styled.div`
    display: flex;
    margin-top: 8px;
`

const Title = styled.h1`
    color: green;
    background: lightgreen;
    margin: 0;
    padding: 10px;
    text-align: center;
`

const FiltersTitle = styled.h3`
    color: green;
    margin: 0;
    padding: 10px;
    text-align: center;
`

const Navigation = styled.aside`
    color: green;
    background: lightyellow;
    min-width: 300px;
`

const NavigationTitle = styled.h2`
    color: green;
    background: lightgreen;
    margin: 0;
    padding: 10px;
    text-align: center;
`

const FilterWrapper = styled.div`
    background: lightgrey;
    padding: 8px;
    font-size: 16px;
`

const FilterItem = styled.div`
    background: white;
    color: blue;
    margin: 4px;
    padding: 4px;
`

const ProductList = styled.div`
    background: lightblue;
    display: grid;
    grid-row: auto;
    gap: 4px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 22px;
    line-height: 24px;
    list-style: none;
    > * {
        border: 1px solid red;
    }
`

const ProductItem = styled.div<{bgindex: number}>`
    background-color: rgba(0, 0, 0, ${
        props => {
            if (props.bgindex % 2) {
                return '.3';
            } else if (props.bgindex % 3) {
                return '.5';
            } else if (props.bgindex % 5) {
                return '.7';
            } else if (props.bgindex % 7) {
                return '.9';
            } else {
                return '.0'
            }
        }
    });
    margin: 8px;
    padding: 4px;
`

const ProductItemTitle = styled.h4`
    background: lightgreen;
    height: 48px;
    overflow: hidden;
`

const ProductId = styled.div`
    padding: 15px;
    color: white;
    text-align: right;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`

const ItemImage = styled.img`
    width: 100%;
`

const PriceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`

const Price = styled.div<{style: any}>`
    color: white;
    ${props => props.style === 'discounted' && (
        "background: blue; border: solid darkviolet 5px; color: red; padding: 4px; border-radius: 20%"
    )}
    ${props => props.style === 'crossed' && 'text-decoration-line: line-through'}

`

const BrandKeyWrapper = styled.div`
    background: red;
    padding: 8px;
    border: solid darkred 3px;
`
const BrandKey = styled.div`
    position: relative;
    color: white;
    font-size: 8px;
    margin: 0 8px;
    text-align: center;
    background-color: darkred;
`
const ArrowRight = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    border-top: 12px solid red;
    border-left: 12px solid transparent;
    border-bottom: 12px solid red;
`;

const ArrowLeft = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    border-top: 12px solid red;
    border-right: 12px solid transparent;
    border-bottom: 12px solid red;
`;

const List = () => {

    const filterNames = [
        'Produktart',
        'Größe',
        'Farbe',
        'Marke',
        'Muster',
        'Material',
        'Verschluss'
    ]

    const allFilters = filterNames.map(filterName => {
        return ProductListData.filters.filter(filter => filter.name === filterName)[0];
    })

    return (
        <>
            <Title>Styled Components</Title>
            <Container>
                <Navigation>
                    <NavigationTitle>Filters</NavigationTitle>
                    {allFilters.map(filter => (
                        <FilterWrapper key={filter.id}>
                            <FiltersTitle>{filter.name}</FiltersTitle>
                            {filter.options.map((filter) => (
                                <FilterItem key={filter.name}>
                                    <input type="checkbox" id={filter.name} name={filter.name}/>
                                    <label htmlFor={filter.name}>{filter.name}</label>
                                </FilterItem>
                            ))}
                        </FilterWrapper>
                    ))}
                </Navigation>
                <main>
                    <ProductList>
                        {ProductListData && ProductListData.items.map((item: any) => (
                            <ProductItem bgindex={item.product.id} key={item.product.id}>
                                <ProductItemTitle>
                                    {item.product.name}
                                </ProductItemTitle>
                                <ProductId><em>{item.product.id}</em></ProductId>
                                <ItemImage src={`https://www.galeria.de/cf-img-product/${item.product.images[0].url}/1280`} />
                                <PriceContainer>
                                    {item.dynamic.displayPrices.map((price: any, i: number) => (
                                        <Price key={i.toString()} style={price.styles[0]}>{price.amount.cents / 100}</Price>
                                    ))}
                                </PriceContainer>
                                <BrandKeyWrapper>
                                    <BrandKey>
                                        {item.product.brandKey}
                                        <ArrowLeft />
                                        <ArrowRight />
                                    </BrandKey>
                                </BrandKeyWrapper>
                            </ProductItem>
                        ))}
                    </ProductList>
                </main>
            </Container>
        </>
    )
}

export default List;
