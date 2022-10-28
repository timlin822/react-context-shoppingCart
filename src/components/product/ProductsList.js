import ProductItem from './ProductItem';

import PRODUCTS_DATA from 'data/ProductsData';

import './Product.css';

const ProductsList=()=>{
    return (
        <div className="product-grid">
            {PRODUCTS_DATA.map(product=>(
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList;