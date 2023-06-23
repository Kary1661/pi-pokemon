import PokeCard from "../Card/PokeCard";
import style from "./ContainerCards.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPokemons} from "../../Redux/actions";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";



const ContainerCards = () => {
    const pokemons = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 12
    
    useEffect(() => { 
      dispatch(getAllPokemons()) 
    }, [dispatch]);

    const pageCount = Math.ceil(pokemons.length / cardsPerPage);

    const paginatedCards = Array.isArray(pokemons)
    ? pokemons.slice(
      currentPage * cardsPerPage,
      (currentPage + 1) * cardsPerPage
    )
    : [];

    const handleNextClick = () => {
      if (currentPage < pageCount - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevClick = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    return (
      <div>
      <div className={style.navBar}>
        <Link to={"/create"}>
          <button className={style.createPokemon}>
            CREATE YOUR OWN POKEMON
          </button>
        </Link>
        <Filters setCurrentPage={setCurrentPage} className={style.filter} />
      </div>

      {pokemons.length ? (
        <div className={style.container}>
          {paginatedCards.map((pokemon) => (
            <div className={style.pokemonsCards} key={pokemon.id}>
              <Link to={`/detail/${pokemon.id}`} className={style.link}>
                <PokeCard
                  className={style.card}
                  name={pokemon.name}
                  id={pokemon.id}
                  image={pokemon.image}
                  types={pokemon.types}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
      <div className={style.handlePageContainer}>
        <button
          disabled={currentPage === 0}
          onClick={handlePrevClick}
          className={style.handlePageButton}
        >
          {"<"}
        </button>
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            className={style.handlePageButton}
            key={index}
            disabled={currentPage === index}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === pageCount - 1}
          onClick={handleNextClick}
          className={style.handlePageButton}
        >
          {">"}
        </button>
      </div>
      )};
    </div>
    );
};

export default ContainerCards;