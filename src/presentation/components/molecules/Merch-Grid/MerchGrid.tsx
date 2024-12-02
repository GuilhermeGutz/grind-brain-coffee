import {Grid2, Button, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

import halloween_mug from '../../../assets/helloween-mug.svg'
import double_expresso_tshirt from '../../../assets/double-depresso-tshirt.svg'
import mug_coffee_or_death from '../../../assets/mug-coffee-or-death.svg'
import coffee_cap from '../../../assets/coffee-cap.svg'


const HoverCard = styled(Card)({
    position: 'relative',
    '&:hover .hover-button': {
      opacity: 1,
      visibility: 'visible',
    },
  });
  
  const HoverButton = styled(Button)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    textTransform: 'none',
  });

export const MerchGrid = () => {
  const products = [
    {
      id: 1,
      tittle: 'SPECIAL HALLOWEEN',
      description: 'Merchandise de Halloween em edição limitada! Garanta itens exclusivos com temas assustadores, disponíveis apenas durante a temporada de Halloween. Não perca!',
      message:'Exclusive to this year!',
      imageUrl: halloween_mug,
      buttonText: 'Join Us',

    },
    {
      id: 2,
      tittle: 'Double Depresso Tee',
      description: 'Got your drip yet? Check out our exclusive tees with killer designs—grab yours before they’re gone!',
      message:'Cool Tees!',
      imageUrl: double_expresso_tshirt,
      buttonText: 'View More',
    },
    {
      id: 3,
      tittle: 'Coffee or Death Mug',
      description: 'Sip in style! Grab our fresh mugs and level up your drink game!',
      message:'Stylish Mugs!',
      imageUrl: mug_coffee_or_death,
      buttonText: 'View More',
    },
    {
      id: 4,
      tittle: 'Caps Sunlight',
      description: 'Protect yourself from the sun in style! Our caps not only complete your look but also help keep your skin safe while you enjoy the outdoors. Stay in the shade of attitude!',
      message:'Sun Shield Style!',
      imageUrl: coffee_cap,
      buttonText: 'View More',
    }, 
  ];

  return (
    <div>
        <Typography 
          variant="h4" 
          color="text.secondary"
          component="h2" 
          align="center" 
          sx={{ marginBottom: 4 }}
        >
          Merch Products
        </Typography>    
      <Grid2
        container
        spacing={8}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {products.map((product) => (
          <Grid2 size={{xs:12, sm:6, md:3}} key={product.id}>
              <HoverCard sx={{ width: 400, height: 420, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    height="220"
                    image={product.imageUrl}
                    alt={product.tittle}
                    sx={{ objectFit: 'cover' }}/>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                      variant="h6"
                      color="text.secondary"
                      component="div">
                      {product.tittle}
                  </Typography>
                  <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 1.5 }}>
                      {product.description}
                  </Typography>
                  <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                      {product.message}
                  </Typography>
                </CardContent>
                <HoverButton
                    color="secondary"
                    variant="contained"
                    className="hover-button">
                    {product.buttonText}
                </HoverButton>
            </HoverCard>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};
