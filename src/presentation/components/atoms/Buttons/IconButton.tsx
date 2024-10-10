import * as React from 'react';
import { Button, IconButton } from '@mui/material';

interface IIconButtonHeaderProps {
  children: React.ReactNode
}

export const IconButtonHeader:React.FC <IIconButtonHeaderProps> = ({children}) => {

  return (
    <Button>
      <IconButton sx={{fontSize:"large", color:"primary.contrastText"}} aria-label="store">
          {children}
      </IconButton>      
    </Button>
  );
}
