import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/actions/product.action";
const ProductDetails = () => {
  const productId = useParams();
  console.log(productId);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);

  const { image, title, price, category, description } = product;

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
        console.log(response);
        dispatch(selectProduct(response.data));
      } catch (e) {
        console.error(e)
      }
    };

    fetchProductDetail();
  }, [productId])
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={`${title}`}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <i className="ui teal tag label">${price}</i>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>  
  )
}

export default ProductDetails