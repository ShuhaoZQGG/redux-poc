import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductItem from "./ProductItem";
import axios from 'axios';
import { setProducts } from "../redux/actions/product.action";
const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {

    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data)
      dispatch(setProducts(response.data))
    } catch (e) {
      console.error(e);
    }
  };
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductItem/>
    </div>
  )
}

export default ProductList