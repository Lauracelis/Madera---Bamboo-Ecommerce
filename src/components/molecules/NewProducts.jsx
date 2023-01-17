import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import silla from '../../assets/img/silla.png'
import CatalogButton from '../atoms/CatalogButton';


const useStyles = makeStyles((theme) => ({
    container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  
}));

export default function productsGrid() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        NUEVO
      </Typography>
      <CatalogButton />
      <Grid container spacing={3}>
        <Grid item xs={6} lg={3}>
          <Card>
            <CardMedia>
                <img src={silla} />
            </CardMedia>
            <CardContent>
                <TextInfoContent 
                heading={'servilletero'}
                body={'COP $500.000'} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={3}>
        <Card>
            <CardMedia>
                <img src={silla} />
            </CardMedia>
            <CardContent>
                <TextInfoContent 
                heading={'servilletero'}
                body={'COP $500.000'} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={3}>
        <Card>
            <CardMedia>
                <img src={silla} />
            </CardMedia>
            <CardContent>
                <TextInfoContent 
                heading={'servilletero'}
                body={'COP $500.000'} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={3}>
        <Card>
            <CardMedia>
                <img src={silla} />
            </CardMedia>
            <CardContent>
                <TextInfoContent 
                heading={'servilletero'}
                body={'COP $500.000'} />
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </>
  );
}
