import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../helpers/fetchProducts";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddToCartButton from "../atoms/button/AddToCartButton";
import PersonalizationButton from "../atoms/PersonalizationButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export const ProductCard = () => {
  const [products, setProducts] = useState([]);

  //desestructuración 100pre con llave

  useEffect(() => {
    const data = fetchProducts();
    data.then((res) => {
      setProducts(res);
    });
  }, []);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box paddingBottom={59}>
    <Grid container spacing={3} m={5}>
      {products.map((product) => (
        <Grid item xs={9} md={6} lg={3} m={5} key={product.id}>
          <Card className={classes.root} >
            <CardHeader title={product.title} />
            <CardMedia
              className={classes.media}
              image={product.img}
              title="comedor"
            />

            <CardContent>{product.information.price}</CardContent>

            <CardActions disableSpacing>
              
            <AddToCartButton product={product} />
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
                <Typography variant="h6">{product.information.info}</Typography>
                <Typography paragraph>
                  {`madera: ${product.information.wood}`}
                </Typography>
                <Typography paragraph>{product.information.cloth}</Typography>
                <Typography paragraph>
                  {product.information.measures}
                </Typography>
              </CardContent>
              <PersonalizationButton />
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};
