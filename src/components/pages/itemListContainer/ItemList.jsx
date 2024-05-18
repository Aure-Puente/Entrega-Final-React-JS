//Importaciones:
import ProductCard from "../../common/productCard/ProductCard.jsx"
import "../itemListContainer/ItemListContainer.css"


//JSX:
const ItemList = ({items}) => {
    return (
        <div className="container">
            {items.map(({id, title, description, price, img})=>{
                return(
                    <ProductCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        img={img} />
                )
            })}
        </div>
    )
}

export default ItemList