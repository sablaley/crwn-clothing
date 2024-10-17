import React, { useContext,Fragment} from 'react'
import './shop.styles.scss';
// import SHOP_DATA from '../../shop-data.json';
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card-component'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    // console.log(products);
    
   
    
    return (
        <Fragment>
           {
            Object.keys(categoriesMap).map((title)=>{
                return (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((product)=>(
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </Fragment>
                )
            })
           }
        </Fragment>
    )
}

export default Shop