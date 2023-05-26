import Header from "../components/Header";
import Product from "../components/Product";

class ProductData {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = `https://picsum.photos/id/${id}/600/400`
    }
}

// HomeView React Component
const HomeView = () => {
    // React componet must return a JSX object
    // return ( JSX )
    const productList = [
        new ProductData(1, "Product E", 1299),
        new ProductData(2, "Product F", 3999),
        new ProductData(3, "Product G", 4999),
        new ProductData(4, "Product H", 4999),
        new ProductData(999, "Product I", 599),
        new ProductData(6, "Product J", 793),
    ];
    const productListElements = productList.map(product => {
        return <Product key={product.id} product={product} />
    })

    return (
        <div>
            <Header
                title="Welcome to my Home View"
                subtitle="Hello World!"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Section Title</h2>
                    <div className="row">
                        {productListElements}
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <h2>Footer</h2>
                </div>
            </footer>
        </div>
    )
}

// Export HomeView component
export default HomeView;