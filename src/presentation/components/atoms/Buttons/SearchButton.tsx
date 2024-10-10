import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, InputBase } from '@mui/material';

interface ISearchButtonProps {
  children: React.ReactNode
}

export const SearchButton:React.FC <ISearchButtonProps> = ({children}) => {
    const [showSearch, setShowSearch] = useState(false);
    const searchInputRef = useRef<HTMLInputElement |  null>(null); 

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    useEffect(() => {
        if (showSearch) {
            searchInputRef.current?.focus();
        }
    }, [showSearch]);    

  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{fontSize:"large", color:"primary.contrastText"}} aria-label="store" onClick={handleSearchClick}>
          {children}
      </IconButton>
      {showSearch && (
        <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: 'inherit', marginLeft: '8px' }}
            inputRef={searchInputRef}
        />
      )}      
    </Box>
  );
}
