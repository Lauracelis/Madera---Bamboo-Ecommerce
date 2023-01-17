import React from "react";
import {Container, Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Habitacion from '../../assets/img/Habitacion.jpg'
import comedor from '../../assets/img/comedor.jpg'
import cocina from '../../assets/img/cocina.jpg'
import sala from '../../assets/img/sala.jpg'

export default function BuySection() {
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
}