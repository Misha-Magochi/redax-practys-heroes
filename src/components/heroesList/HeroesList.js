import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';


import { heroesFetching,
     heroesFetched,
      heroesFetchingError,
       heroesDeleted,
       heroesAdded
     } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const {heroes, heroesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()));
    }, [dispatch, request]);

    useEffect(() => {
        if (heroes.length > 0) {
            console.log("Список героев обновлен");
        }
    }, [heroes]);

    const handleFormSubmit = async (newHero) => {
        try {
            const response = await request("http://localhost:3001/heroes", 'POST', newHero);
            const addedHero = response.data; // Вам может потребоваться обновить структуру ответа в соответствии с вашим сервером
            dispatch(heroesAdded(addedHero));
          } catch (error) {
            console.error('Ошибка создания персонажа', error);
          }
    };

    const handleRemoveItem = async (id) => {
        try{
            await request(`http://localhost:3001/heroes/${id}`, 'DELETE');
            dispatch(heroesDeleted(id));
        } catch (error) {
            console.error('Ошибка удаления персонажа', error);
        }
        
      };
    

      if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} {...props}
            onButtonClick={() => handleRemoveItem(id)}
            handleSubmit={handleFormSubmit}
            />
        })
    }

    const elements = renderHeroesList(heroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;