import { ReactNode } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
