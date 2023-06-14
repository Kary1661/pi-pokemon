import PokeCard from "../Card/PokeCard";

const ContainerCards = ({ pokemons }) => {
    return (
        <div className="container-cards">
            {pokemons.map((pokemon) => (
                <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default ContainerCards;