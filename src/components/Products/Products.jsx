import React from 'react';
import Product from './Product/Product';


const Products=({products})=>{

 return(
    <>
    <div class="container-fluid">
    <div class="row">
            {products.map(product=>(
               <div class="col-md-2 col-lg-3">
                <Product product={product}/>
                </div>
      ))}
      </div>
      </div>
    </>
 
 )
}

export default Products;
