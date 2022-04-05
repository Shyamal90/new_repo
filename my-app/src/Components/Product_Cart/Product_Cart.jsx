import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Product_Cart({product_image,product_name,product_price}) {
  return (
    <>
      <div className="product_cart_container">
          <div className="product_cart_container_product_image">
              <img src={product_image} alt="" />
          </div>
          <div className="product_cart_container_product_details">
              <div className="product_name_and_price">
                  <h3>{product_name}</h3>
                  <h4>{product_price}</h4>
              </div>
              <div className="product_rating">
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Product_Cart