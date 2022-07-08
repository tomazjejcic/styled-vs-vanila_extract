// TODO:
//  - fix title and aside title both beeing h1, make aside h2
//  - change filter element to filterItem in styled components branch
//  - maybe change price element to priceStyle in styled components branch
//  - can also give item.product.id some styling

import { useState } from "react";

import { ProductListData } from "../data/productListData"

import {
    themeClass,
    title,
    container,
    navigation,
    filterWrapper,
    filterTitle,
    filterItem,
    productList,
    productItem,
    productItemOpacity3,
    productItemOpacity5,
    productItemOpacity7,
    productItemOpacity9,
    productItemOpacity0,
    productItemTitle,
    itemImage,
    priceContainer,
    priceStyle,
    priceStyleDiscounted,
    priceStyleCrossed,
    brandKeyWrapper,
    brandKey,
    arrowLeft,
    arrowRight,
 } from '../styles/styles.css';

const List = () => {

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

    const getProductItemStyle = (item: any) => {
        if (item.product.id % 2) {
            return productItemOpacity3
        } else if (item.product.id % 3) {
            return productItemOpacity5
        } else if (item.product.id % 5) {
            return productItemOpacity7
        } else if (item.product.id % 7) {
            return productItemOpacity9
        } else {
            return productItemOpacity0
        }
    }

    return (
        <>
            <h1 className={title}>
                Products List
            </h1>
            <div className={container}>
                <aside className={navigation}>
                    <h1 className={title}>
                        Filters
                    </h1>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{productFilter[0].name}</h3>
                         {productFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{groseFilter[0].name}</h3>
                         {groseFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{farbeFilter[0].name}</h3>
                         {farbeFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{musterFilter[0].name}</h3>
                         {musterFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{markeFilter[0].name}</h3>
                         {markeFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{materialFilter[0].name}</h3>
                         {materialFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                    <div className={filterWrapper}>
                        <h3 className={filterTitle}>{verschlussFilter[0].name}</h3>
                         {verschlussFilter[0].options.map((filter) => (
                             <div className={filterItem} key={filter.name}>
                                <input type="checkbox" id={filter.name} name={filter.name}/>
                                <label htmlFor={filter.name}>{filter.name}</label>
                             </div>
                         ))}
                    </div>
                </aside>
                <main>

                    <div className={productList}>
                    {ProductListData && ProductListData.items.map((item: any) => (
                             <div className={`${productItem} ${getProductItemStyle(item)}`} key={item.product.id}>
                                <h4 className={productItemTitle}>
                                    {item.product.name}
                                </h4>
                                <p>{item.product.id}</p>
                                <img className={itemImage} src={`https://www.galeria.de/cf-img-product/${item.product.images[0].url}/1280`}/>
                                <div className={priceContainer}>
                                    {item.dynamic.displayPrices.map((price: any, i: number) => {
                                        if (price.styles[0] === 'discounted') {
                                            return <div className={priceStyleDiscounted} key={i.toString()}>
                                                {price.amount.cents / 100}
                                            </div>
                                        } else if (price.styles[0] === 'crossed') {
                                            return <div className={priceStyleCrossed} key={i.toString()}>
                                                {price.amount.cents / 100}
                                            </div>
                                        } else {
                                            return <div className={priceStyle} key={i.toString()}>
                                                {price.amount.cents / 100}
                                            </div>
                                        }
                                    })}
                                </div>
                                <div className={brandKeyWrapper}>
                                    <div className={brandKey}>
                                         {item.product.brandKey}
                                         <div className={arrowLeft} />
                                         <div className={arrowRight }/>
                                    </div>
                                </div>
                             </div>
                         ))}
                    </div>
                </main>
            </div>
        </>
    )
}

export default List;
