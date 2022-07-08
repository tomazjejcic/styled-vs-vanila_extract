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
    productId,
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
                    <h2 className={title}>
                        Filters
                    </h2>
                    {allFilters.map(filter => (
                        <div className={filterWrapper} key={filter.id}>
                            <h3 className={filterTitle}>{filter.name}</h3>
                            {filter.options.map((filter) => (
                                <div className={filterItem} key={filter.name}>
                                    <input type="checkbox" id={filter.name} name={filter.name}/>
                                    <label htmlFor={filter.name}>{filter.name}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                </aside>
                <main>

                    <div className={productList}>
                    {ProductListData && ProductListData.items.map((item: any) => (
                             <div className={`${productItem} ${getProductItemStyle(item)}`} key={item.product.id}>
                                <h4 className={productItemTitle}>
                                    {item.product.name}
                                </h4>
                                <div className={productId}><em>{item.product.id}</em></div>
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
