import { useResolvedPath } from "react-router-dom";
import capitalize from "lodash.capitalize";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CartSection from "../components/cart/CartSection";

const Cart = () => {
  const { pathname } = useResolvedPath();
  return (
    <>
      <Breadcrumb slug={capitalize(pathname.slice(1))} />
      <CartSection />
    </>
  );
};

export default Cart;
