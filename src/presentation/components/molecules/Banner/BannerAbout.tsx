import { Box, Typography } from '@mui/material';
import about_banner from '../../../assets/hand-bg2.png';
import coffee_image from '../../../assets/Colheita.jpeg';
import torra from '../../../assets/torra.jpg';

interface IBannerAbout {
    imageUrl?: string; // Propriedade opcional para a URL da imagem
}

export const BannerAbout: React.FC<IBannerAbout> = ({ imageUrl }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    backgroundColor: '#A57355',
                    mx: '-24px',
                }}
            >
                {/* Imagem de fundo à esquerda */}
                <Box
                    sx={{
                        width: '35%',
                        height: '100vh',
                        backgroundImage: `url(${imageUrl || about_banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Texto no lado direito */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 5,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            mb: 3,
                            fontWeight: 'bold',
                        }}
                    >
                        Every coffee bean has a story!
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#FFFFFF',
                            maxWidth: '600px',
                            lineHeight: 1.8,
                        }}
                    >
                        "Every coffee bean carries a story of dedication — from the farmer who cultivates with passion, 
                        to our roastery that turns every detail into perfection, and finally to the moment you enjoy 
                        a cup that connects hard work, tradition, and purpose in every sip."
                    </Typography>
                </Box>
            </Box>








            {/* Texto abaixo da segunda imagem */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    backgroundColor: '#EBEBEB',
                    mx: '-24px',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'top',
                        px: 5,
                        py: 10
                    }}
                >
                    <Box
                        sx={{
                            flex: 0.5,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'top',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#000000',
                                mb: 3,
                                fontWeight: 'bold',
                        }}
                        >
                            The Story Behind Every Bean
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#000000',
                                maxWidth: '600px',
                                lineHeight: 1.8
                            }}
                        >
                            Every cup of coffee you enjoy is the result of years of tradition, dedication, and love for the art of cultivating the finest beans. Come and discover the origins of our coffee and how it is carefully produced, from the farm to your table.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'top',
                                alignItems: 'flex-start',
                                px: 5,
                            }}
                        >
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#000000',
                                maxWidth: '600px',
                                lineHeight: 1.8,
                            }}
                        >
                            Behind every coffee bean is a rich story of hard work, tradition, and passion. On the farms, growing coffee is more than just a job  its a legacy passed down through generations. From planting to the careful handpicking of ripe cherries, every step is done with care and respect for the land.
                            <br></br>
                            The farmers, true guardians of this process, dedicate their lives to ensuring the best quality, overcoming challenges with resilience and love for what they do. Its this meticulous work that gives coffee its unique character, bringing not just flavor but the heart of its producers to your cup. Supporting coffee means supporting those who grow it.
                        </Typography>  
                    </Box>
                </Box>                

            {/* Imagem ao lado direito */}
                <Box
                    sx={{
                        width: '35%',
                        height: '100vh',
                        backgroundImage: `url(${coffee_image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </Box>








            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    backgroundColor: '#000000',
                    mx: '-24px',
                }}
                >
                {/* Imagem ao lado esquerdo */}
                <Box
                    sx={{
                    width: '35%',
                    height: '100vh',
                    backgroundImage: `url(${torra})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Texto ao lado direito */}
                <Box
                    sx={{
                    flex: 1, // Ocupa o espaço restante no lado direito
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'top',
                    alignItems: 'center',
                    px: 5,
                    py: 20,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#FFFFFF',
                            mb: 3,
                            fontWeight: 'bold',
                        }}
                    >
                        The Perfect Roast
                    </Typography>
                    <Typography
                    variant="body1"
                    sx={{
                        color: '#FFFFFF',
                        maxWidth: '600px',
                        lineHeight: 1.8,
                    }}
                    >
                        Every cup of coffee you enjoy carries the result of a masterfully crafted roast. At our brand, each bean is treated as unique, and the roast is tailored to the specific profile of each batch. We work with different roast levels, carefully adjusted to highlight the natural aromas and flavors of each type of coffee.
                        <br></br>
                        Our commitment is to bring out the best that every coffee has to offer, showcasing unique notes that range from caramel sweetness to citrus or chocolatey touches. Here, roasting isnt just a step in the process its an art that transforms exceptional beans into unforgettable experiences in your cup.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
