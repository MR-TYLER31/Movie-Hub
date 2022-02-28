import React from "react";
import * as S from "./styles"
import * as H from "../Hamburger/styles"
import Hamburger from "../Hamburger/Hamburger";



const Navbar = () => {
  return (
    <S.Nav>
      <H.Logo href="/">
        Movie<span>Hub</span>
      </H.Logo>
      <Hamburger/>
    </S.Nav>
  );
};

export default Navbar;

