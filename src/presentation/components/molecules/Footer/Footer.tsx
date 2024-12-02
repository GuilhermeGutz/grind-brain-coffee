import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, Twitter, Phone } from '@mui/icons-material';

interface IFooter {
  imageUrl?: string; // Propriedade opcional para a URL da imagem
}

export const Footer: React.FC<IFooter> = ({ imageUrl }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#fff',
        py: 4,
        px: 2,
        mx: '-24px',
        mt: 20,
      }}
    >
      {/* Logo e informações */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4} // Maior espaçamento entre as seções
      >
        {/* Logo e texto */}
        <Box textAlign="center">
          {imageUrl && (
            <Box
              component="img"
              src={imageUrl}
              alt="Logo da Brain Coffee"
              sx={{
                width: 80, // Ajuste conforme necessário
                height: 80, // Ajuste conforme necessário
                mb: 1, // Espaçamento abaixo da imagem
              }}
            />
          )}
          <Typography variant="h5" fontWeight="bold">
            Grind Brain Coffee
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            O combustível do seu cérebro!
          </Typography>

          {/* Título e contato */}
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Contact Us
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Phone />
            <Typography variant="body1">+55 (47) 99999-9999</Typography>
          </Stack>
        </Box>

        {/* Redes sociais */}
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
