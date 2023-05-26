import Header from "../components/Header";

// HomeView React Component
const HomeView = () => {
    // React componet must return a JSX object
    // return ( JSX )
    return (
        <div>
            <Header
                title="About View"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Section Title</h2>
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