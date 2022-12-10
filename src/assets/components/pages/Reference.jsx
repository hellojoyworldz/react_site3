import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ReferCont from "../include/ReferCont";

import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Reference = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "reference api"]} />
        <ReferCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
