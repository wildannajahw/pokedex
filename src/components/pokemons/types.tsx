import { Pokemon, Moves } from "../../query";

export interface ListProps {
    data: Pokemon[] | undefined;
    isPokeBag?: boolean;
  }
  
export interface DetailProps {
  moves?: Moves[],
  name: string;
  image?: string;
  type?: string | undefined;
  
}

export interface PokeCatchProps {
  name: string;
  image?: string;
}

export interface PokeAddSuccessProps {
  handleClose: () => void;
}

export interface PokeCatchProps {
  name: string;
  image?: string;
}

export interface PokeModalProps {
  result: boolean;
  handleClose: () => void;
  pokemon: Pokemon;
}

export interface PokeAddProps {
  pokemon: Pokemon;
  onSuccess: (result: boolean) => void;
}