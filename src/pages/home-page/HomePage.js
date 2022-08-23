import React from "react";
import Home from "../../components/home/Home";

import { DefaultLayout } from "../layout/DefaultLayout";

const HomePage = ({ bikes }) => {
  return (
    <DefaultLayout>
      <Home bikes={bikes} />
    </DefaultLayout>
  );
};

export default HomePage;
