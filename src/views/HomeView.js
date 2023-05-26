import Header from "../components/Header";
import Product from "../components/Product";

// HomeView React Component
const HomeView = () => {
    // React componet must return a JSX object
    // return ( JSX )
    const productList = [
        {
            id: 1,
            name: "Product A",
            price: 299,
            img: "https://picsum.photos/id/999/600/400"
        },
        {
            id: 2,
            name: "Product B",
            price: 499,
            img: "https://picsum.photos/id/1/600/400"
        },
        {
            id: 3,
            name: "Product C",
            price: 543,
            img: "https://picsum.photos/id/2/600/400"
        },
        {
            id: 4,
            name: "Product D",
            price: 123,
            img: "https://picsum.photos/id/3/600/400"
        }
    ];
    const productListElements = productList.map(product => {
        return <Product product={product} />
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