import Breadcrumbs from "./component/Breadcrums";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/productDetailsPage";
import ProductPage from "./Pages/ProductPage";
import AllRoutes from "./routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h3>Jholachap coder</h3>
      <Breadcrumbs />
      <hr />
      <AllRoutes />
    </div>
  );
}
