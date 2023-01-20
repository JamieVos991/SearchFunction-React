import { useState } from "react";
import { filterGamesByTitle, filterGamesByPlatform } from "../../Helpers/FilterGames";
import { games } from "../../Data/games";
import { useDispatch } from "react-redux";
import "./Form.css";

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "Title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle
        },
        {
            id: "Platforms",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform
        }
    ]);

    let dispatch = useDispatch();

    const onInputChange = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        });
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return (
            <div key={objectFromStateArray.id} className="form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChange} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value}></input>
            </div>
        );
    });

    const submit = (event) => {
        event.preventDefault();
        let result = games;
        inputs.forEach(input => {
            result = input.filter(input.value, result);
        });
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        });
    };

    return (
        <form className="form" onSubmit={submit}>
            <div className="form__inputs">
                {inputsToBeRendered}
            </div>
            <button className="form__button" onClick={submit}>Zoeken</button>
        </form>
    );
}

export default Form;