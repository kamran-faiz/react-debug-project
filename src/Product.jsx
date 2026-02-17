export const Product = ({name, price, inStock, categories}) => {
    return(
        <div>
            <h3>Product : {name}</h3>
            <p>Price : ${price}</p>
            <p>Availability : {inStock ? "Yes" : "No"}</p>
            <p>Category : {categories.join(", ")}</p>
        </div>
    )
}