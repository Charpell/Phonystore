import React, { Component, Fragment } from 'react';

import Title from './Title';
import Product from './Product';
import { ProductConsumer } from './context';

class ProductList extends Component {
  state = {
    products: []
  }

  render() { 
    return ( 
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return <h1>{value}</h1>
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
     );
  }
}
 
export default ProductList;