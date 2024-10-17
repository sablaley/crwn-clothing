import React, { useContext,Fragment} from 'react'
import './shop.styles.scss';
// import SHOP_DATA from '../../shop-data.json';
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/catergory-preview/catergory-preview.component';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    // console.log(products);
    
   
    
    return (
        <Fragment>
           {
            Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products} />
            })
           }
        </Fragment>
    )
}

export default Shop