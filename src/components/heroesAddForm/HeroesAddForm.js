

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import React, {useState}  from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
/* import { heroesAdded } from "../../actions"; */


const HeroesAddForm = ({ dispatch, handleSubmit}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [element, setElement] = useState("");
    
    const handleInputChange = (e) => {
        setName(e.target.value);
      };
    
      const handleTextareaChange = (e) => {
        setDescription(e.target.value);
      };
    
      const handleSelectChange = (e) => {
        setElement(e.target.value);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const id = uuidv4();
    
        const newHero = {
          id,
          name,
          description,
          element
        };
    
        handleSubmit(newHero);
    
        setName("");
        setDescription("");
        setElement("");
      };


    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={handleInputChange}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={description}
                    onChange={handleTextareaChange}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={handleSelectChange}
                    >
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit"
             className="btn btn-primary"
             onClick={handleSubmit}>Создать</button>
        </form>
    )
}



export default connect () (HeroesAddForm);