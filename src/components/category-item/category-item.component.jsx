import './category-item.styles.scss'
import { Link } from 'react-router-dom'
const CategoryItem = ({category}) => {
    const { id, title, imageUrl } = category
    return (
        <div className="category">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="body">
                <h2>{title}</h2>
                <p><Link to={`shop/${title}`}>shop now</Link></p>
            </div>
        </div>
    )
}

export default CategoryItem