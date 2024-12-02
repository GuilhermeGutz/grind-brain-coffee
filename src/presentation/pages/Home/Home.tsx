import { Container } from '@mui/material';
import { Header, ProductGrid, MerchGrid, BannerHalloween, BannerInfoClub, CarroselProducts, CarroselMerch, Footer } from '../../components/molecules';

import robusta_amazonico from '../../assets/banner-club-halloween.svg'
import logo from '../../assets/icon-grind-brain-coffee.svg'
import roastery from '../../assets/footer.png'

export const Home = () => {
    return(
        <Container className="home-containe" sx={{minWidth: '100%', bgcolor: '#181A1B'}}>
            <Header />
            <BannerHalloween imageUrl={robusta_amazonico} />
            <BannerInfoClub />
            <CarroselProducts />
            <ProductGrid />
            <CarroselMerch />
            <MerchGrid />
            <Footer imageUrl={logo} footerImageUrl={roastery} />
        </Container>
    )
};
