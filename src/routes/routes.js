import { PokemonBoard } from "../views/pokemon-board/pokemonBoard.view";
import { PokemonInfo } from "../views/pokemon-info/pokemonInfo.view";

export const routes = [
    {
        path:"/pokemon/board",
        component: PokemonBoard,
        exact: true
    },{
        path:"/pokemon/info",
        component: PokemonInfo,
        exact: true
    }
]