import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddToCartButton from '../atoms/button/AddToCartButton'
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import PersonalizationButton from '../atoms/PersonalizationButton';







const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
    
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=" COMEDOR 4 PUESTOS"
      />
      <CardMedia
        className={classes.media}
        image="/src/assets/img/Producto1.jpeg"
        title="comedor"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        COP $500.000
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <ShoppingCartRoundedIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h5'>INFORMACIÓN</Typography>
          <Typography paragraph>
          Perfecto para familias que disfrutan tiempo de calidad compartiendo juntos alrededor de la mesa.
          </Typography>
          <Typography paragraph>
          Mesa de comedor de 4 puestos fabricada en madera Pino Canadiense y pintada con pintura sellador y laca catalizada. No incluye accesorios ni decoración. 
          </Typography>
          <Typography paragraph>
          Las medidas son aproximadas de la mesa son: 
          Ancho: 85 cm / Largo: 85 cm / Alto: 80cm
          </Typography>
          <Typography>
          Las medidas son aproximadas de las butacas son: 
          Ancho: 35 cm / Alto: 50cm
          </Typography>
          <Typography>
            Cantidad:
          </Typography>
        </CardContent>
        <AddToCartButton />
        <PersonalizationButton />
      </Collapse>
    </Card>
  );
}
