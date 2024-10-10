import { Box, Typography, Grid2 } from '@mui/material';

import dol from '../../../assets/dol.svg'
import express from '../../../assets/express.svg'

export const BannerInfoClub: React.FC = () => {

    const products = [
        {
          id: 1,
          tittle: 'SAVE MONEY',
          description: 'Shipping for all subscription orders to the country. is on the house for our ride or dies (that\'s you)...',
          imageUrl: dol,
    
        },
        {
          id: 2,
          tittle: 'FREE SHIPPING FOR MEMBERS',
          description: 'Shipping for all subscription orders to the country, is on the house for our ride or dies (that\'s you)...',
          imageUrl: express,
        },
        {
          id: 3,
          tittle: 'EXCLUSIVITY',
          description: 'Enjoy exclusive access to a variety of Grind Brain products, not only our unique coffees but also items and accessories for your everyday life, whether for your coffee experience or your personal style.',
          imageUrl: dol,
        }, 
      ];    

      return (
        <Box
            sx={{
                height: '100vh', 
                maxHeight: '300px',
                backgroundSize: 'cover',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#c72223',//'#bd2021', //'#E22728'
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start', //top
                mx: '-24px',
                flexDirection: 'row',
                pt: 2 
            }}>
            {products.map((product, index) => (
                <Grid2
                    key={product.id} 
                    xs={4} 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: index === 0 ? 'center' : index === 1 ? 'center' : 'center',
                        ml: index === 0 ? 20 : 15,  // Reduz ainda mais a margem entre as imagens
                        mr: index === 2 ? 20 : 15,  // Margem mínima entre a segunda e as demais
                    }}>
                    {/* img*/}
                    <Box
                        component="img"
                        src={product.imageUrl} 
                        alt={`Imagem ${product.id}`}
                        sx={{ width: '150px', height: '93px' }}
                    />
                    {/* tittle */}
                    <Typography variant="h6" color="white" align="center" sx={{ mt: 2 }}>
                        {product.tittle}
                    </Typography>                    
                    
                    <Typography variant="body1" color="white" align="center" sx={{ mt: 1 }}>
                        {product.description}
                    </Typography>
                </Grid2>
            ))}
        </Box>
    );
};
