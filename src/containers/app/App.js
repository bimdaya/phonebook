import React from 'react';
import { Grid } from 'semantic-ui-react';

import Home from '../home/Home'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './App.css'

const App = () => (
	<Grid
		centered
		className='app'
		padded>
    	<Header user='Bim' />
		<Home/>
		<Footer/>
  	</Grid>
);

export default App;
