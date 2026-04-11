import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductsData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);
  return <div>Product</div>;
};

export default Product;
