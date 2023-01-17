import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm" >
      <Typography variant='h5'>
      CREAMOS MUEBLES PARA TU HOGAR Y TU NEGOCIO
      </Typography>
      </Container>
    </React.Fragment>
  );
}
