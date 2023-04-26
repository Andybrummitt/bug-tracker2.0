import { FC } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="mx-auto w-full min-h-0 max-w-7xl p-2 flex-col flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
