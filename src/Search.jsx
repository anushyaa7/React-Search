import { Box, Chip, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import SearchIcon from "./assets/SearchIcon.png";
import Filter from "./assets/Filter.png";
import "./Search.css"


export default function Search() {
  const [chipData, setChipData] = useState([{ key: 0, label: 'Deletable' }]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Box className="search-container">
    <TextField
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={Filter} alt="filter-icon" className="search-icon-filter" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <img src={SearchIcon} alt="search-icon" className="search-icon" />
          </InputAdornment>
        ),
      }}
      className="search-textfield"
    />
    <Box className="search-chip-container">
      <Stack direction="row" spacing={1}>
        {chipData.map((data) => (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
          />
        ))}
      </Stack>
    </Box>
  </Box>
  );
}