import { Container } from '@mui/material';
import { Header, Carrosel, ProductGrid, MerchGrid, BannerHalloween, BannerInfoClub } from '../../components/molecules';

import robusta_amazonico from '../../assets/banner-club-halloween.svg'

export const Home = () => {
    return(
        <Container className="home-containe" sx={{minWidth: '100%', bgcolor: '#181A1B'}}>
            <Header />
            <BannerHalloween imageUrl={robusta_amazonico} />
            <BannerInfoClub />
            <Carrosel />
            <ProductGrid />
            <Carrosel />
            <MerchGrid />
        </Container>
    )
};
