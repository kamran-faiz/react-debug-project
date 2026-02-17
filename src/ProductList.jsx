export const ProductList = () => {

    const products = [
        { id: 1, name: "Laptop", price: 499 },
        { id: 2, name: "Phone", price: 499 },
        { id: 3, name: "Copilot", price: 499 },
        { id: 4, name: "Anti gravity", price: 699 },
    ];

    // Filter and map in one step
    const ProductsElement = products
        .filter(product => product.price > 500)
        .map(product => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
        ));

    return (
        <div>
            <h1>Our Products</h1>
            {ProductsElement}
        </div>
    );
};
