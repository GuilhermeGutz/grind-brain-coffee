import { Container } from '@mui/material';
import { Header } from '../../components/molecules';
import { BannerAbout } from '../../components/molecules/Banner'

export const About = () => {
    return(
        <Container className="about-containe" sx={{minWidth: '100%', bgcolor: '#181A1B'}}>
            <Header />
            <BannerAbout/>
        </Container>
    )
};