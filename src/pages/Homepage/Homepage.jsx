import React from "react";
import { Hero, Categories } from "components";
import { useDocumentTitle } from "hooks";
import "./Homepage.css";
const Home = () => {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};

export { Home };
