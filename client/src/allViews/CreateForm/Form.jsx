import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate";
import { getAllTypes } from "../../Redux/actions";
import {NavLink} from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    const types = useSelector(state => state.types)

    const [input, setInput] = useState({
        image: "",
        name: "",
        hp: "0",
        attack: "0",
        defense: "0",
        speed: "",
        height: "0",
        weight: "0",
        types: []
    })

    const [errors, setErrors] = useState({
        image: "",
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: ""
    });

    const handleInputChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        
        setInput({
            ...input,
            [property]: value
        })
        setErrors(validate({
            ...input,
            [property]: value
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
                types: [...input.types, value]})); 
                e.target.value = "";
        }else{
            setInput({
                ...input,
                types: [...input.types]
            })
            setErrors(validate({
                ...input,
                types: [...input.types]}));
                e.target.value = "";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/pokemons", Form)
            alert("Pokemon created successfuly ")
            return response
        } catch (error) {
            alert("incorrect form")
        }
    }

    const onClose = (typeName) => {
        let filteredTypes = input.types.filter(type => type !== typeName);
        setInput({
            ...input,
            types: [...filteredTypes]
        })
        setErrors(validate({
            ...input,
            types: [...filteredTypes]}))
    }

    const getTypeName = (typeId) => {
        const filteredTypes = types.filter(type => type.id === Number(typeId));
        let name = filteredTypes[0].name;
        console.log(filteredTypes);
        return name;
    }

    return (
        <div className={style.container}>
        <NavLink to="/home"><button className={style.btnHome}>Back to Home</button></NavLink>
        <div className={style.form}>
            <form onSubmit={handleSubmit}>
            <h1>Create your own Pokemon!</h1>
            <div>
                    <label>Image: </label>
                    <input
                     placeholder="Url from image..."
                     type="text" name="image" value={input.image} onChange={handleInputChange} />
                    {errors.image && (<p className={style.danger}>{errors.image}</p>)}
                </div>
                <div>
                    <label>Name: </label>
                    <input
                    placeholder="Name your Pokemon..." 
                    type="text" name="name" value={input.name} onChange={handleInputChange} />
                    {errors.name && (<p className={style.danger}>{errors.name}</p>)}
                </div>
                <div>
                    <label>HP: </label>
                    <input type="number" name="hp" value={input.hp} onChange={handleInputChange} />
                    {errors.hp && (<p className={style.danger}>{errors.hp}</p>)}
                </div>
                <div>
                    <label>Attack: </label>
                    <input type="number" name="attack" value={input.attack} onChange={handleInputChange} />
                    {errors.attack && (<p className={style.danger}>{errors.attack}</p>)}
                </div>
                <div>
                    <label>Defense: </label>
                    <input type="number" name="defense" value={input.defense} onChange={handleInputChange} />
                    {errors.defense && (<p className={style.danger}>{errors.defense}</p>)}
                </div>
                <div>
                    <label>Speed: </label>
                    <input type="number" name="speed" value={input.speed} onChange={handleInputChange} />
                    {errors.speed && (<p className={style.danger}>{errors.speed}</p>)}
                </div>
                <div>
                    <label>Height: </label>
                    <input type="number" name="height" value={input.height} onChange={handleInputChange} />
                    {errors.height && (<p className={style.danger}>{errors.height}</p>)}
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="number" name="weight" value={input.weight} onChange={handleInputChange} />
                    {errors.weight && (<p className={style.danger}>{errors.weight}</p>)}
                </div>
                
                <div>
                    <label>Types: </label>
                    <select
                    id="types" 
                    name="types" onChange={handleTypesChange}>
                        <option value="">Select type between 1 to 3</option>
                        {types?.map(type => (
                            <option 
                            key={type?.id}
                            name={type?.name}
                            value={type?.id}>{type?.name}</option>
                        ))}
                    </select>
                    <br/>
        <div className={style.typeRender}>
         {Form?.types?.map((type, index) => (
          <div key={index}>
            <span className={style.typeSelected}>{getTypeName(type)}</span>
                                <button className={style.btnClose} type="button" onClick={() => onClose(type)}>X</button>
                            </div>
                        ))}
                    </div>
                    <span className={style.danger}>{errors?.types}</span>
                </div>
                <br/>
                <button type="submit">Pokemon ready!</button>
            </form>
           </div>
        </div>
    )
};

export default Form;