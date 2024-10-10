import {Grid2, Button, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

import banner_club from '../../../assets/graind-brain-club-card.svg'
import robusta_amazonico from '../../../assets/carrosel-robusta-amazonico.svg'
import caramel_banana from '../../../assets/carrosel-caramel-banana.svg'


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

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      tittle: 'Grind Brain Club',
      description: 'Join our subscription club, the Grind Brain Club, and receive a new and exclusive coffee for subscribers every month at your home, along with exclusive samples for you to contribute to the development of our flavors.',
      message:'Exclusive for members!',
      imageUrl: banner_club,
      buttonText: 'Join Us',

    },
    {
      id: 2,
      tittle: 'Robusta Amazônico',
      description: 'A complex and fresh coffee with a silky and full-bodied texture. High sweetness, medium acidity, and notes of 70% chocolate.',
      message:'Limited edition!',
      imageUrl: robusta_amazonico,
      buttonText: 'View More',
    },
    {
      id: 3,
      tittle: 'Caramel Banana',
      description: 'A tropical coffee with notes of caramelized banana, rich sweetness, and balanced acidity. Fresh, liqueur-like, and full of flavor, its the perfect choice for an exotic and unique experience.',
      message:'Tropical flavor, freshness, and sweetness in every sip.',
      imageUrl: caramel_banana,
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
          Featured Products
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
