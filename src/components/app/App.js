import React from 'react';
import { useDispatch } from 'react-redux';
import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';
import { heroesAdded } from '../../actions';

import './app.scss';

const App = () => {

    const dispatch = useDispatch();

    const handleAddHero = (newHero) => {
        dispatch(heroesAdded(newHero));
      };
    

    return (
        <main className="app">
            <div className="content">
                <HeroesList />
                <div className="content__interactive">
                    <HeroesAddForm onAddHero={handleAddHero} />
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
}


export default App;