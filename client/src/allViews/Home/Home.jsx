import ContainerCards from '../../components/ContainerCards/ContainerCards';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getAllPokemons} from '../../Redux/actions';
import NavBar from '../../components/NavBar/NavBar';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <ContainerCards />
        </div>
    )
}

export default Home;