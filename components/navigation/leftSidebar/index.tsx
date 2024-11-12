import React from "react";

import NavLinks from "../shared/NavLinks";
import NavSessionButtons from "../shared/NavSessionButtons";

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 hidden justify-between px-5 py-7 h-[calc(100vh_-_80px)] sticky left-0 w-28 sm:flex sm:flex-col  lg:w-72">
      <NavLinks />
      <NavSessionButtons />
    </section>
  );
};

export default LeftSidebar;
