import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const { id, title, imageUrl } = category
    return (
        <div className="category">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="body">
                <h2>{title}</h2>
                <p>shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem