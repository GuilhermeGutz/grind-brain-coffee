import React from 'react';
import { Carrosel } from '../Carrosel';
import robusta_amazonico from '../../../assets/carrosel-robusta-amazonico.svg';
import banner_club_halloween from '../../../assets/banner-club-halloween.svg';
import caramel_banana from '../../../assets/carrosel-caramel-banana.svg';
import banner_club_halloween_alt from '../../../assets/banner-club-halloween-alt.svg';

export const CarroselProducts: React.FC = () => {
  const images = [
    {
      label: 'Imagem 1',
      imgPath: banner_club_halloween,
      altImgPath: banner_club_halloween_alt, // Para alternância no primeiro slide
    },
    {
      label: 'Imagem 2',
      imgPath: robusta_amazonico,
    },
    {
      label: 'Imagem 3',
      imgPath: caramel_banana,
    },
  ];

  return <Carrosel images={images} />;
};