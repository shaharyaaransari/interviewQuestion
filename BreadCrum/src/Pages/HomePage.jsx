import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetctData = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((res) => {
        /// console.log(res.products);
        const data = res.products.slice(0, 6);
        setTrending(data);
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
      <h1>Home Page.</h1>
      <span>Trending Page</span>
      <div className="product-grid">
        {trending?.map((el) => {
          return (
            <div className="product-card" key={el.id}>
              <Link to={`product/${el.id}`}>
                <img src={el.thumbnail} alt={el.title} />
                <h4>{el.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="/product">
        <button style={{ width: "100%", fontSize: "25px", height: "50px" }}>
          Veiw All products
        </button>
      </Link>
    </>
  );
};

export default HomePage;
