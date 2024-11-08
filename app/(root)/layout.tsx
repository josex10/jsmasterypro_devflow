import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default RootLayout;
