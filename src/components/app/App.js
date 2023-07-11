import React, {Component} from 'react';
import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';

class App extends Component {
    state = {
        heroes: [],
        term: '',
    };
    
render() {
    return (
        <main className="app">
            <div className="content">
                <HeroesList /* heroes={heroes} *//>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
}
}

export default App;