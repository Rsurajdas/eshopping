import { useResolvedPath } from "react-router-dom";
import capitalize from "lodash.capitalize";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ShopSection from "../components/shop/ShopSection";

const Shop = () => {
  const { pathname } = useResolvedPath();
  return (
    <>
      <Breadcrumb slug={capitalize(pathname.slice(1))} />
      <ShopSection />
    </>
  );
};

export default Shop;
