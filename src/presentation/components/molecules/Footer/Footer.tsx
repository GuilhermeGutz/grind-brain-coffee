import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, Twitter, Phone } from '@mui/icons-material';

interface IFooter {
  imageUrl?: string; // Propriedade opcional para a URL da imagem (logo principal)
  footerImageUrl?: string; // Propriedade opcional para a imagem extra no footer
}

export const Footer: React.FC<IFooter> = ({ imageUrl, footerImageUrl }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#fff',
        py: 2,
        px: 18,
        mx: '-24px',
        mt: 20,
      }}
    >
      {/* Seções principais organizadas em um Stack */}
      <Stack
        direction={{ xs: 'column', md: 'row' }} // Em tela pequena, fica em coluna; em maior, em linha
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        {/* Seção da logo */}
        <Box textAlign="center">
          {imageUrl && (
            <Box
              component="img"
              src={imageUrl}
              alt="Logo da Brain Coffee"
              sx={{
                width: 80,
                height: 80,
                mb: 1,
              }}
            />
          )}
          <Typography variant="h5" fontWeight="bold">
            Grind Brain Coffee
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Your brain's fuel!
          </Typography>

          {/* Contato */}
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Contact Us
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Phone />
            <Typography variant="body1">+55 (47) 99999-9999</Typography>
          </Stack>
        </Box>

        {/* Seção da imagem extra */}
        {footerImageUrl && (
          <Box
            component="img"
            src={footerImageUrl}
            alt="Imagem decorativa no footer"
            sx={{
              width: 250, // Ajuste conforme necessário
              height: 250, // Ajuste conforme necessário
            }}
          />
        )}

        {/* Seção das redes sociais */}
        <Box textAlign="center">
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <Twitter />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      {/* Direitos autorais */}
      <Typography
        variant="body2"
        textAlign="center"
        mt={4}
        sx={{ fontSize: '0.875rem', color: '#aaa' }}
      >
        © {new Date().getFullYear()} Brain Coffee. All rights reserved.
      </Typography>
    </Box>
  );
};
