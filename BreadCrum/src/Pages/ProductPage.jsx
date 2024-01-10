import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetctData = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((res) => {
        /// console.log(res.products);

        setProduct(res.products);
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
      <h2>Products Page.</h2>
      <div className="product-grid">
        {product?.map((el) => {
          return (
            <div className="product-card" key={el.id}>
              <Link to={`/product/${el.id}`}>
                <img src={el.thumbnail} alt={el.title} />
                <h4>{el.title}</h4>
                <h4>$ {el.price}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
