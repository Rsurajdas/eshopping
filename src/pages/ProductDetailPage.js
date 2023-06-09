import { useParams } from "react-router-dom";
import ProductDetail from "../components/shop/ProductDetail";

const ProductDetailPage = () => {
  const { productid } = useParams();
  return <>{productid && <ProductDetail id={productid} />}</>;
};

export default ProductDetailPage;
