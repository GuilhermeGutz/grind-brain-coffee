import { Box, Typography } from '@mui/material';
import about_banner from '../../../assets/about-banner.svg';
import second_image from '../../../assets/coffee-plant-2.jpg'; // Segunda imagem

interface IBannerAbout {
    imageUrl?: string; // Propriedade opcional para a URL da imagem
}

export const BannerAbout: React.FC<IBannerAbout> = ({ imageUrl }) => {
    return (
        <>
            {/* Primeira imagem */}
            <Box
                sx={{
                    height: '100vh', // O banner ocupa 100% da altura da tela
                    // maxHeight: '800px',
                    backgroundImage: `url(${imageUrl || about_banner})`, // Imagem de fundo padrão
                    backgroundSize: 'cover', // A imagem cobre todo o espaço do banner
                    backgroundPosition: 'center', // Alinha a imagem à esquerda
                    backgroundRepeat: 'no-repeat', // Não repete a imagem
                    position: 'relative', // Para permitir posicionar elementos filhos
                }}
            >
                {/* Texto na primeira imagem */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '42%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            px: 2,
                            py: 1,
                            borderRadius: '8px',
                        }}
                    >
                        Every coffee bean has a story!
                    </Typography>
                </Box>
            </Box>

            {/* Segunda imagem com efeito Parallax */}
            <Box
                sx={{
                    height: '75vh', // Ocupa 100% da altura da tela
                    backgroundImage: `url(${second_image})`, // Segunda imagem
                    backgroundSize: 'cover', // A imagem cobre todo o espaço
                    backgroundPosition: 'center', // Centraliza a imagem
                    backgroundRepeat: 'no-repeat', // Não repete a imagem
                    backgroundAttachment: 'fixed', // Parallax Effect
                }}
            >
                {/* Espaço vazio para o efeito parallax */}
            </Box>

            {/* Texto abaixo da segunda imagem */}
            <Box
                sx={{
                    height: 'auto',
                    backgroundColor: '#f5f5f5', // Fundo claro para contraste
                    py: 5, // Padding vertical
                    px: 2, // Padding horizontal
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#333',
                        mb: 3, // Margem inferior
                    }}
                >
                    A história por trás de cada grão
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#555',
                        maxWidth: '800px',
                        height: '400px',
                        margin: '0 auto', // Centraliza horizontalmente
                    }}
                >
                    Cada xícara de café que você aprecia é o resultado de anos de tradição, dedicação e amor pela arte de cultivar o melhor grão. 
                    Venha descobrir as origens do nosso café e como ele é produzido com cuidado, do campo até sua mesa.
                </Typography>
            </Box>
        </>
    );
};
