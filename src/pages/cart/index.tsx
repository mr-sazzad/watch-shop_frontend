import RootLayout from "@/components/layout/RootLayout";
import Cart from "@/components/ui/Cart";
import { ReactElement } from "react";

const CartPage = () => {
  return (
    <div className="mt-16 px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Cart />
        <div className="flex justify-center items-center w-full">check out</div>
      </div>
    </div>
  );
};

export default CartPage;

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
