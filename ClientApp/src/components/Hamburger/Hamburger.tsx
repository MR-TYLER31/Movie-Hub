import React, { useState } from "react";
import * as S from "../styles"
import * as H from "./styles"
import SearchMovieField from "../SearchMovieField/SearchMovieField";


const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Nav>
      <H.Logo href="">
        Movie<span>Hub</span>
      </H.Logo>
      <H.Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </H.Hamburger>
      <H.Menu isOpen={isOpen}>
        <SearchMovieField/>
        <H.MenuLink href="">Sign In</H.MenuLink>
        <span />
        <H.MenuLink href="">Sign Up</H.MenuLink>
      </H.Menu>
    </S.Nav>
  );
};

export default Hamburger;

