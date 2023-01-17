import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import CatalogCard from '../molecules/CatalogCard'



export default function CatalogGrid(){
    return(
        <Grid container spacing={3}>
        <Grid item xs={6} lg={6}>
            <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={6}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={6}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={3}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={6}>
        <CatalogCard />
        </Grid>
        <Grid item xs={6} lg={6}>
        <CatalogCard />
        </Grid>

      </Grid>
    )
}