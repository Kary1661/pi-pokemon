const initialState = {
    allPokemons: [],
    pokemons: [],
    pokeTypes: [],
    filteredPokemons: [],
    orderedPokemons: [],
    orderById: [],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_ALL_POKEMONS":
            return {
              ...state, 
              allpokemons: action.payload,
              pokemons: action.payload,
            };

        case "GET_ALL_TYPES":
            return {
              ...state, 
              pokeTypes: action.payload
            };

        case "GET_POKEMON_BY_ID":
          console.log(action.payload)
            return {
              ...state, 
              orderById: action.payload
            };

        case "GET_POKEMON_BY_NAME":
            return {
              ...state, 
              filteredPokemons: action.payload
            };

            case "FILTER_ALL":
              if(action.payload === "all") {return {...state, pokemons:state.allPokemons}}
          
      const typeSelected = state.allPokemons?.filter((el) => {
          if(!el.createdInDb){
              if(el.types[0] === action.payload || el.types[1] == action.payload){

               return true 
              }
              else return false 
          } 
          else {
              const acum = el.pokeTypes?.filter((t) => t.name === action.payload)
                  if(acum.length >0){
                  return true 
                  }
                  else {
                  return false 
                  }
              }       
          })
      
      const results = typeSelected.filter((pk) => state.allPokemons.includes(pk))
      
      return {
            ...state,
            pokemons: results,
            
      };

          case "ORDER_BY_NAME":
            if (action.payload === "asc") {
              let poke = state.pokemons?.slice();
              let ords = poke.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              });
      
              if (state.pokeFilter.length > 0) {
                return { ...state, pokeFilter: ords };
              }
              return {
                ...state,
                pokemons: ords,
              };
            }
      
            if (action.payload === "des") {
              let poke = state.pokemons?.slice();
              let ords = poke.sort(function (a, b) {
                if (b.name > a.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              });
      
              if (state.pokeFilter.length > 0) {
                return { ...state, pokeFilter: ords };
              }
              return {
                ...state,
                pokemons: ords,
              };
            };

            case "ORDER_BY_ATTACK":
              if (action.payload === "asc") {
                let poke = state.pokemons?.slice();
                let ords = poke.sort(function (a, b) {
                  if (a.attack > b.attack) {
                    return 1;
                  }
                  if (b.attack > a.attack) {
                    return -1;
                  }
                  return 0;
                });
        
                if (state.pokeFilter.length > 0) {
                  return { ...state, pokeFilter: ords };
                }
                return {
                  ...state,
                  pokemons: ords,
                };
              }
        
              if (action.payload === "des") {
                let poke = state.pokemons?.slice();
                let ords = poke.sort(function (a, b) {
                  if (b.attack > a.attack) {
                    return 1;
                  }
                  if (a.attack > b.attack) {
                    return -1;
                  }
                  return 0;
                });
        
                if (state.pokeFilter.length > 0) {
                  return { ...state, pokeFilter: ords };
                }
                return {
                  ...state,
                  pokemons: ords,
                };
              };
             
            case "CREATE_FILTER":
              if(action.payload === "all") return {
                ...state, 
                pokemons:state.allPokemons
              };
              if (action.payload === "created") {
                const createdPokes = state.allPokemons?.filter((poke) => typeof poke.id === "string");
                  
                return {
                    ...state,
                    pokemons: createdPokes,
                   
                  };
                }
              if (action.payload === "api") {
                const apiPokes = state.allPokemons?.filter((poke) => typeof poke.id === "number");
                return{
                      ...state,
                      pokemons:apiPokes,
                    }
            };

            case "CLEAR_ORDER":
              return {
                ...state,
                pokemons: state.allPokemons,
                pokeFilter: [],
            };
            default: 
            return {...state};
            }
};

export default reducer;