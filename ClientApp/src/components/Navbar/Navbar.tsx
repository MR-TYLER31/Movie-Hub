import React, { useState } from "react";
import * as S from "./styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Nav>
      <S.Logo href="">
        Movie<span>Hub</span>
      </S.Logo>
      <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </S.Hamburger>
      <S.Menu isOpen={isOpen}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            height: 35,
            border: "3px solid white",
            borderRadius: "25px;",
          }}
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search Movies"
            inputProps={{ "aria-label": "search movies" }}
          />
          <S.Button type="submit" style={{ outline: "none" }}>
            <SearchIcon sx={{ color: "white" }} />
          </S.Button>
        </Paper>
        <S.MenuLink href="">My List</S.MenuLink>
        <S.MenuLink href="">My Rentals</S.MenuLink>
        <S.MenuLink href="">Returns</S.MenuLink>
        <S.MenuLink href="">Sign In</S.MenuLink>
        <span />
        <S.MenuLink href="">Sign Up</S.MenuLink>
      </S.Menu>
    </S.Nav>
  );
};

export default Navbar;
