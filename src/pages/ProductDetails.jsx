import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchApi } from "../hooks/useFetchApi";

export const ProductDetails = () => {
  const { productId } = useParams();

  useEffect(() => {
    console.log("props", productId);
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};
