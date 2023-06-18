import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./validate";
import { getAllTypes } from "../../redux/actions/actions";
import {NavLink} from "react-router-dom";

const CreateForm = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTypes())
    }
    , [dispatch])

    const types = useSelector(state => state.types)

    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: []
    })

    const [errors, setErrors] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setInput({
            ...input,
            [name]: value
        })
        setErrors(validate({
            ...input,
            [name]: value
        }))
    }

    const handleTypesChange = (e) => {
        const value = e.target.value;

        if(!input.types.includes(value)){
            setInput({
                ...input,
                types: [...input.types, value]
            })
            setErrors(validate({
                ...input,
                types: [...input.types, value]
            }))

        }else{
            setInput({
                ...input,
                types: input.types.filter(type => type !== value)
            })
            setErrors(validate({
                ...input,
                types: input.types.filter(type => type !== value)
            }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/pokemons", form)
            alert("Pokemon created successfuly ")
            return response
        } catch (error) {
            alert("incorrect form")
        }
    }

    const onClose = (typeName) => {
        let newTypes = input.types.filter(type => type !== typeName);
        setInput({
            ...input,
            types: newTypes
        })
        setErrors(validate({
            ...input,
            types: newTypes
        }))
    }

    const getTypeName = (typeId) => {
        const type = types.find(type => type.id === Number(typeId));
        return type.name;
    }

    return (
        <div className={style.container}>
            <h1>Create your own Pokemon!</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.form}>
                    <label>Name: </label>
                    <input type="text" name="name" value={input.name} onChange={handleInputChange} />
                    {errors.name && (<p className={style.danger}>{errors.name}</p>)}
                </div>
                <div className={style.form}>
                    <label>HP: </label>
                    <input type="number" name="hp" value={input.hp} onChange={handleInputChange} />
                    {errors.hp && (<p className={style.danger}>{errors.hp}</p>)}
                </div>
                <div className={style.form}>
                    <label>Attack: </label>
                    <input type="number" name="attack" value={input.attack} onChange={handleInputChange} />
                    {errors.attack && (<p className={style.danger}>{errors.attack}</p>)}
                </div>
                <div className={style.form}>
                    <label>Defense: </label>
                    <input type="number" name="defense" value={input.defense} onChange={handleInputChange} />
                    {errors.defense && (<p className={style.danger}>{errors.defense}</p>)}
                </div>
                <div className={style.form}>
                    <label>Speed: </label>
                    <input type="number" name="speed" value={input.speed} onChange={handleInputChange} />
                    {errors.speed && (<p className={style.danger}>{errors.speed}</p>)}
                </div>
                <div className={style.form}>
                    <label>Height: </label>
                    <input type="number" name="height" value={input.height} onChange={handleInputChange} />
                    {errors.height && (<p className={style.danger}>{errors.height}</p>)}
                </div>
                <div className={style.form}>
                    <label>Weight: </label>
                    <input type="number" name="weight" value={input.weight} onChange={handleInputChange} />
                    {errors.weight && (<p className={style.danger}>{errors.weight}</p>)}
                </div>
                <div className={style.form}>
                    <label>Image: </label>
                    <input type="text" name="image" value={input.image} onChange={handleInputChange} />
                    {errors.image && (<p className={style.danger}>{errors.image}</p>)}
                </div>
                <div className={style.form}>
                    <label>Types: </label>
                    <select name="types" onChange={handleTypesChange}>
                        <option value="">Select a type</option>
                        {types.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    {errors.types && (<p className={style.danger}>{errors.types}</p>)}
                    <div className={style.container2}>
                        {input.types.map(type => (
                            <div key={type} className={style.types}>
                                <p>{getTypeName(type)}</p>
                                <button type="button" onClick={() => onClose(type)}>X</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit">Create Pokemon</button>
            </form>
            <NavLink to="/home">
                <button>Back to Home</button>
            </NavLink>
        </div>
    )
};

export default CreateForm;