import { ReactNode } from "react";

import LeftSidebar from "@/components/navigation/leftSidebar";
import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      <div className="flex w-full flex-row pt-20">
        <LeftSidebar />

        {children}
      </div>
    </section>
  );
};

export default RootLayout;
