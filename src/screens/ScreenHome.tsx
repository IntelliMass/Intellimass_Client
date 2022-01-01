import React from "react";
import MenuComponent from "../layout/menu";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {


  
  return (
    <>
      <MenuComponent/>
    </>
  );
};

export default HomeScreen;

HomeScreen.defaultProps = {};
