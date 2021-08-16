import React from 'react'

const Product = ({product}) => {
    return (
                <div className="mt-3">
                    <img src={product.media.source} className="img-fluid" alt="..."></img>
                    <div class="row mt-2">
                        <div class="col-8"><h3>{product.name}</h3></div>
                        <div class="col-2 mt-1"><h5>{product.price.formatted} Kyats</h5></div>
                    </div>
                </div>
                
    )
}

export default Product

