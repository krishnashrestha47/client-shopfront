import React, { Children } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  );
};
