import { lazy, Suspense } from "react";
import { useQuery } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";

import { GET_POKEMON, PokemonDetail, PokemonVars } from "../query";
import { Badge } from "../components/commons/Badge";
import { Box } from "../components/commons/Box";
import { Text } from "../components/commons/Text";
import { Page } from "../components/commons/Page";
import { Image } from "../components/commons/Image";
import BlockLoader from "../components/commons/Loader/BlockLoader";
import Detail from "../components/pokemons/Detail";

const PokeCatch = lazy(
  () =>
    import(
      /* webpackChunkName: "poke-catch" */ "../components/pokemons/PokeCatch"
    )
);

type RouterParams = {
  id: string;
};

type LocationState = {
  image?: string;
};

export default function DetailPage() {
  let { id } = useParams() as RouterParams;
  const { state } = useLocation();
  const { data, loading, error } = useQuery<PokemonDetail, PokemonVars>(
    GET_POKEMON,
    {
      variables: {
        name: id,
      },
    }
  );
  const { image: pokeImage } = state as LocationState|| {};
  const { pokemon } = data || {};
  const { types, moves } = pokemon || {};

  return (
    <Page title={id}>
      <Box sx={{ flex: 1, flexDirection: "column" }}>
        {!!error && (
          <Text sx={{ color: "text-error", textAlign: "center" }}>
            {error.message}
          </Text>
        )}
        {loading && <BlockLoader height="55px" width="150px" />}
        <Box
          sx={{  flexDirection: "row", justifyContent:"space-between" }}
        >
          <Box
            sx={{ flexDirection: "row", flexWrap: "wrap"}}
          >
            {!loading &&
              types?.map(({ type }) => (
                
                <Badge bg={type.name} title={type.name} key={type.name} />
              ))}
          </Box>
          <Suspense fallback={null}>
            {!!pokemon && <PokeCatch name={id} image={pokeImage} />}
          </Suspense>
        </Box>
        
        <Box sx={{ alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          <Image
            src={pokeImage}
            alt={id}
            sx={{ height: "250px", width: "250px", marginBottom: "-4.5rem" }}
          />
        </Box>
        <Detail type={types?.[0]?.type?.name} moves={moves} name={id} image={pokeImage}/>
        
      </Box>
    </Page>
  );
}
