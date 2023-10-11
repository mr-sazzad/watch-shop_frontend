import Image from "next/image";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { MdOutlinePlusOne } from "react-icons/md";
import { TbExposureMinus1 } from "react-icons/tb";

interface Product {
  name: string;
  image: string;
  price: number;
  status: string;
  rating: number;
  description: string;
  comments: { userName: string; comment: string }[];
}

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("/json/product.json");
      const data = await res.json();
      setCart(data);
    };
    fetchCart();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5">
        <h2 className="text-center py-5 tracking-widest text-lg font-semibold">
          Cart Products
        </h2>
        <div className="overflow-hidden">
          {cart?.map((product: Product) => (
            <div
              key={product.name}
              className="flex justify-between items-center h-32 ring-1 ring-inset ring-gray-200 "
            >
              <div className="pl-3">
                <Image
                  src={product.image}
                  height={90}
                  width={90}
                  alt="cartImage"
                  className="rounded-2xl"
                />
              </div>
              <div className="pr-3">
                <p className="font-semibold text-gray-500 tracking-widest pb-3">
                  {product.name}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-500 tracking-widest pb-3 flex-1">
                    TK: {product.price}
                  </p>
                  <p className="font-semibold text-gray-500 pb-3 flex-1 flex justify-center rounded">
                    6 {/*  quantity  */}
                  </p>
                </div>
                <div className="flex justify-end gap-4">
                  <button className="text-white px-3 rounded py-1 bg-indigo-400 text-lg">
                    <MdOutlinePlusOne />
                  </button>
                  <button className="text-white px-4 rounded py-1 bg-indigo-400">
                    <TbExposureMinus1 />
                  </button>
                  <button className="text-white px-4 rounded py-1 bg-rose-400">
                    <BiTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center px-3">
          <p className="font-semibold">Total Price:</p>
          <p> 100</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
