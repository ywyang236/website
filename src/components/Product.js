const Product = ({ product }) => {
    return (
        <div className="col-md-4 mb-3" key={`product${product.id}`}>
            <div className="card">
                <img src={product.img} alt="" className="card-img" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>$ {product.price} USD</p>
                </div>
            </div>
        </div>
    )
}

export default Product;