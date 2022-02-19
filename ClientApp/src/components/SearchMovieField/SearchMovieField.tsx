import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import * as B from "./styles"

export default function SearchMovieField() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, height: 35, border: "1px solid white", borderRadius: "25px;" }}
      style={{backgroundColor: "rgba(0, 0, 0, 0)"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Search Movies"
        inputProps={{ 'aria-label': 'search movies' }}
        
      />
      <B.Button style={{outline: "none",}}><SearchIcon sx={{color: "white"}}/></B.Button>
    </Paper>
  );
}


//   <S.SearchForm action="/" method="get">
//         <S.SearchInputField
//             type="text"
//             id="movie-search"
//             placeholder="Search Movies"
//             autoComplete="off"
//             name="search"
//             className="w3-input" 
//         >
//             </S.SearchInputField>
//         <SearchIcon/>
//     </S.SearchForm>