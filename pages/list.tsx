import { useState } from "react";
import styled from "styled-components";

import { ProductListData } from "../data/productListData"

const Container = styled.h1`
    display: flex
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

const FilterWrapper = styled.div`
    background: lightgrey;
    padding: 8px;
    font-size: 16px;
`

const Filter = styled.div`
    background: white;
    color: blue;
    margin: 4px;
    padding: 4px;
    // font-size: 16px;
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
    margin: 8px;
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
    // console.log('## ProductListData:', ProductListData);
    const [productFilter, setProductFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Produktart');
    });
    const [groseFilter, setGroseFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Größe');
    });
    const [farbeFilter, setFarbeFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Farbe');
    });
    const [musterFilter, setMusterFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Muster');
    });
    const [markeFilter, setMarkeFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Marke');
    });
    const [materialFilter, setMaterialFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Material');
    });
    const [verschlussFilter, setVerschlussFilter] = useState(() => {
        return ProductListData.filters.filter(filter => filter.name === 'Verschluss');
    });

    return (
        <>
            <Title>Products List</Title>
            <Container>
                <Navigation>
                    <Title>Filters</Title>
                    <FilterWrapper>
                        <FiltersTitle>{productFilter[0].name}</FiltersTitle>
                        {productFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                    <FilterWrapper>
                        <FiltersTitle>{groseFilter[0].name}</FiltersTitle>
                        {groseFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                    <FilterWrapper>
                        <FiltersTitle>{farbeFilter[0].name}</FiltersTitle>
                        {farbeFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                    <FilterWrapper>
                        <FiltersTitle>{musterFilter[0].name}</FiltersTitle>
                        {musterFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                    <FilterWrapper>
                        <FiltersTitle>{markeFilter[0].name}</FiltersTitle>
                        {markeFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                    <FilterWrapper>
                        <FiltersTitle>{materialFilter[0].name}</FiltersTitle>
                        {materialFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                    <FilterWrapper>
                        <FiltersTitle>{verschlussFilter[0].name}</FiltersTitle>
                        {verschlussFilter[0].options.map((filter) => (
                            <Filter key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                            </Filter>
                        ))}
                    </FilterWrapper>
                </Navigation>
                <main>
                    <ProductList>
                        {ProductListData && ProductListData.items.map((item: any) => (
                            <ProductItem bgindex={item.product.id} key={item.product.id}>
                                <ProductItemTitle>
                                    {item.product.name}
                                </ProductItemTitle>
                                <p>{item.product.id}</p>
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
