import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetctData = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);

        setProduct(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetctData();
  }, []);
  return (
    <>
      <h2>Product Details Page.</h2>
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <img src={product.thumbnail} alt="Product" />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
