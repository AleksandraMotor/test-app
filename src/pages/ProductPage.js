import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {

    const { id } = useParams();
    return (
        <>
            <div>Strona produktu</div>
            <Product id={id}/>
            <Link to="/products">Powrót do strony produktu</Link>
        </>
        
    );
};

export default ProductPage;