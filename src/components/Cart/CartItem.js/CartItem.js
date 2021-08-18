import React from 'react'
import { Typography } from '@material-ui/core'

const CartItem = ({item}) => {
    return (
        <div class="mt-4">
                <div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top" src={item.media.source} alt="Card image cap"/>
                <div class="card-body">
                <div class="col">
                    <h3>{item.name}</h3>
                </div>
                <div class="col">
                    <h3>{item.price.formatted}$</h3>
                </div>
    
                <p class="card-text">
                    <Typography dangerouslySetInnerHTML={{ __html: item.description }} variant="body2" color="textSecondary" component="p" />    
                </p>
        </div>
        </div>
        </div>
    )
}

export default CartItem
