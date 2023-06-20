import { useEffect, useState } from "react";
import { clearOrder, filterAll, getAllTypes, orderByName, orderByAttack } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from './Filters.module.css';


const Filters = () => {
     
    const [filters, setFilters] = useState({
        name: '',
        type: 'all',
        attack: '',
        source: 'all'
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);

    const types = useSelector(state => state.types);

    const handelFilterChange = (e) => { 
        const prop = e.target.name;
        const value = e.target.value;
        setFilters({...filters, [prop]: value});
    
    if(prop === 'type') {
        dispatch(filterAll(value, filters.source));
    }
    if(prop === 'source') {
        dispatch(filterAll(filters.type, value));
    }
    }
    
    const handelNameOrder = (e) => {
        const prop = e.target.name;
        const value = e.target.value;

        setFilters({...filters, [prop]: value,
         name: ''
    });
      dispatch(orderByName(value));
    }

    const handelAttackOrder = (e) => {
        const prop = e.target.name;
        const value = e.target.value;

        setFilters({...filters, [prop]: value,
         attack: ''
    });
      dispatch(orderByAttack(value));
    }

    const handelClear = () => {
        setFilters({
            name: '',
            type: '',
            attack: '',
            source: ''
        });
        dispatch(clearOrder());
        dispatch(filterAll('', ''));
    }

    return (
        <div className={style.container}>
            <div>
                <label >Filter by type: </label>
                <select
                 id='type'
                 name='type' value={filters.type} onChange={handelFilterChange}>
                    <option 
                     value=''>All</option>
                    {types.map((type, index) => (
                        <option key={index} value={type.name}>{type.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Filter by source: </label>
                <select
                    id='source'
                    name='source' value={filters.source} onChange={handelFilterChange}>
                    <option value=''>All</option>
                    <option value='api'>Api</option>
                    <option value='db'>Db</option>
                </select>
            </div>
            <div>
                <label>Order by name: </label>
                <select
                    id='name'
                    name='name' value={filters.name} onChange={handelNameOrder}>
                    <option value=''>None</option>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
            </div>
            <div>
                <label>Order by attack: </label>
                <select
                    id='attack'
                    name='attack' value={filters.attack} onChange={handelAttackOrder}>
                    <option value=''>None</option>
                    <option value='asc'>Lowest</option>
                    <option value='desc'>Highest</option>
                </select>
            </div>
            <div>
                <button className={style.button} onClick={handelClear}>Clear</button>
            </div>
        </div>
    );
}

export default Filters;


