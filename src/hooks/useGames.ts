import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  // arguments passed  
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
    gameQuery: GameQuery
) =>
  useData<Game>(
    "/games", // calling hook at this endpoint
    { 
        /*params: { 
            genres: selectedGenre?.id, 
            platforms: selectedPlatform?.id 
        }*/ 
        params: { 
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder
        } 
    },
    // [selectedGenre?.id,  selectedPlatform?.id ] // array of dependencies
    [gameQuery]
  );

export default useGames;
