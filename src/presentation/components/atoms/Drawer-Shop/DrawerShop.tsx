import React from "react";
import { Drawer, Box } from "@mui/material";

interface IDrawerShop {
  open: boolean;
  toggleDrawer: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export const DrawerShop: React.FC<IDrawerShop> = ({ open, toggleDrawer, children }) => {
  return (
    <Drawer 
      open={open} 
      onClose={() => toggleDrawer(false)}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          paddingTop: '30px',
        }}>
          {/* logo */}
          <Box
              component="img"
              sx={{
                  height: 120,
                  width: 120,
                  objectFit: 'cover',
                  marginBottom: '20px', // Espaçamento entre a logo e os children
              }}
              alt="Logo"
              src="src/presentation/assets/logo-drawer.svg"
          />
          {/* children */}
          <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2, // Espaçamento entre os children (botões ou outros componentes)
                width: '100%',
                alignItems: 'center',
            }}>
            {children}
          </Box>
      </Box>
    </Drawer>
  );
};
