import React from "react";
import {Network} from "../components/network/Network";

type ScreenSearchProps = {};

const ScreenSearch: React.FC<ScreenSearchProps> = () => {
  return (
      <>
        <h1>SEARCH Screen</h1>
        <Network/>
      </>
  );
};

export default ScreenSearch;

ScreenSearch.defaultProps = {};
