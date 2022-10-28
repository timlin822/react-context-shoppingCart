import ProductsList from 'components/product/ProductsList';
import Cart from 'components/cart/Cart';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="cart-flex">
          <ProductsList />
          <Cart />
        </div>
      </div>
    </section>
  );
}

export default App;