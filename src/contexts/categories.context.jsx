import { createContext ,useState, useEffect} from "react";
import { getCategoriesAndDocuments} from '../firebase/utils/firebase.utils.js'
// import SHOP_DATA from '../shop-data.js';
export const CategoriesContext = createContext({
    categoriesMap:{}
})
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(async () => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            // console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
      }, []);
    
    const value = {categoriesMap}
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}