import React from 'react';
import Header from '../Header/Header';
import './App.css';
import MainContentContainer from '../MainContent/MainContentContainer';
import SurpriseContainer from '../Surprise/SurpriseContainer';
import YourCollectionContainer from '../YourCollection/YourCollectionContainer';
import Footer from '../Footer/Footer'
import { Route } from 'react-router-dom';
import PokemonContainer from '../Pokemon/PokemonContainer';

const App = () => {
    return (
        <main className='app'>
            <Header />
            <div className="app-main">
                <Route exact path="/" component={MainContentContainer}/> 
                <Route path="/surprise" component={SurpriseContainer}/> 
                <Route path="/your-collection" component={YourCollectionContainer}/>
                <Route exact path="/pokemon" component={null}/>
                <Route path="/pokemon/:pokemonID?" component={PokemonContainer}/>
            </div>
            <Footer /> 
        </main>           
    )
}

export default App;