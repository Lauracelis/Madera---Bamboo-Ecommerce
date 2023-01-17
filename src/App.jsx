import React from 'react';
import {Button, Container} from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core';
import theme from './styles/theme/index' 
import Navbar from './components/atoms/Navbar'
import Banner from './components/atoms/Banner'
import NewProducts from './components/molecules/NewProducts';
import WoodInformation from './components/atoms/WoodInformation';
import BuySection from './components/molecules/BuySection';
import Personalization from './components/molecules/Personalization';
import Footer from './components/atoms/Footer';


export default function App() {

  return(
    <>
  <Container>
   <Navbar />
   <Banner />
   <NewProducts />
   <WoodInformation />
   <BuySection />
   <Personalization />
   <Footer />
  </Container>
  </>
  );
}
 