import React from 'react';
import { Carrosel } from '../Carrosel';
import good_drive_race from '../../../assets/good-drive-race.svg';
import good_drive_coffee from '../../../assets/good-drive-coffee.svg';
import good_drive_octane from '../../../assets/good-drive-octane.svg';

export const CarroselMerch: React.FC = () => {
  const images = [
    {
      label: 'Imagem 1',
      imgPath: good_drive_coffee,
    },
    {
      label: 'Imagem 2',
      imgPath: good_drive_octane,
    },
    {
      label: 'Imagem 3',
      imgPath: good_drive_race,
    },
  ];

  return <Carrosel images={images} />;
};