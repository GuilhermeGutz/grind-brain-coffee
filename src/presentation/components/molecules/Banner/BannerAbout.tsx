import { Box, Typography } from '@mui/material';
import about_banner from '../../../assets/torra.jpg';
import second_image from '../../../assets/coffee-plant-2.jpg'; // Segunda imagem
import coffee_image from '../../../assets/test.jpg'; // Imagem a ser adicionada ao lado direito

interface IBannerAbout {
    imageUrl?: string; // Propriedade opcional para a URL da imagem
}

export const BannerAbout: React.FC<IBannerAbout> = ({ imageUrl }) => {
    return (
        <>
            {/* Primeira imagem com estrutura similar à última imagem */}
            <Box
                sx={{
                    display: 'flex', // Usa flexbox para alinhar conteúdo
                    justifyContent: 'flex-start', // Alinha a imagem à esquerda
                    height: '100vh', // Altura total do banner
                    backgroundColor: '#c78150', // Cor de fundo
                    position: 'relative', // Permite o posicionamento interno
                    padding: '20px', // Espaçamento superior, inferior e laterais
                    pt: '150px',
                    overflow: 'hidden', // Evita que a imagem ultrapasse os limites do Box
                }}
            >
                {/* Imagem com bordas arredondadas e afastamento */}
                <Box
                    sx={{
                        width: '25%', // Define a largura da imagem
                        height: '80%', // Altura total
                        backgroundImage: `url(${imageUrl || about_banner})`, // Imagem de fundo
                        backgroundSize: 'cover', // A imagem cobre todo o espaço
                        backgroundPosition: 'center', // Centraliza a imagem
                        backgroundRepeat: 'no-repeat', // Não repete a imagem
                        borderRadius: '20px', // Bordas arredondadas
                        marginLeft: '20px', // Afastamento da lateral esquerda
                    }}
                />
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
                    backgroundColor: '#ebebeb', // Fundo claro para contraste
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
                        color: '#000000',
                        maxWidth: '800px',
                        height: '200px',
                        margin: '0 auto', // Centraliza horizontalmente
                    }}
                >
                    Cada xícara de café que você aprecia é o resultado de anos de tradição, dedicação e amor pela arte de cultivar o melhor grão. 
                    Venha descobrir as origens do nosso café e como ele é produzido com cuidado, do campo até sua mesa.
                </Typography>

                {/* Imagem ao lado direito */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end', // Alinha a imagem à direita
                        px: 5, // Padding horizontal para afastar da borda
                    }}
                >
                    <Box
                        sx={{
                            width: '25%', // Define a largura da imagem
                            height: '80vh', // Define a altura da imagem
                            backgroundImage: `url(${coffee_image})`, // A imagem do café
                            backgroundSize: 'cover', // A imagem cobre o tamanho do Box
                            backgroundPosition: 'center', // Centraliza a imagem
                            backgroundRepeat: 'no-repeat', // Não repete a imagem
                            borderRadius: '20px', // Bordas arredondadas
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};
