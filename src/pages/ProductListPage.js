import { Link } from "react-router-dom";

import '../styles/ProductListPage.css';

const products = ["car", "bike", "motor"];

const ProductListPage = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/products/${product}`}>{product}</Link>
        </li>
    ));

    return (
        <div className="products">
            <h2>Lista Produktów</h2>
            <ul>
                {list}
            </ul>    
        </div>
    );
}

export default ProductListPage;