import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Habitacion from '../../assets/img/Habitacion.jpg'
import comedor from '../../assets/img/comedor.jpg'
import cocina from '../../assets/img/cocina.jpg'
import sala from '../../assets/img/sala.jpg'


const images = [
  {
    url: '/src/assets/img/Habitacion.jpg',
    title: 'HABITACIÓN',
    width: '50%',
  },
  {
    url: '/src/assets/img/comedor.jpg',
    title: 'COMEDOR',
    width: '50%',
  },
  {
    url: '/src/assets/img/cocina.jpg',
    title: 'COCINA',
    width: '50%',
  },
  {
    url: '/src/assets/img/sala.jpg',
    title: 'SALA',
    width: '50%',
  },

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 55%',
});
const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap',  width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width:'50%',
            xs: {width:'30%'}
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

{/*export default function BuySection() {
    return(
        <Container>
        <Typography variant="subtitle1" gutterBottom>
        COMPRAR
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardMedia>
                <img src={Habitacion} />
            </CardMedia>
            <CardContent>
                <Typography variant="h6">
                    HABITACIÓN
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Card>
            <CardMedia>
                <img src={sala} />
            </CardMedia>
            <CardContent>
            <Typography variant="h6">
                    SALA
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Card>
            <CardMedia>
                <img src={cocina} />
            </CardMedia>
            <CardContent>
            <Typography variant="h6">
                    COCINA
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Card>
            <CardMedia>
                <img src={comedor} />
            </CardMedia>
            <CardContent>
            <Typography variant="h6">
                    COMEDOR
                </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
        </Container>
    )
}*/}