import "../itemListContainer/ItemListContainer.css"

export const ItemListContainer = (props) => {
    const {greetings} = props    
    return (
        <div>
            <h3 className="saludo">{greetings}</h3>
        </div>
    )
}