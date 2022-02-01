import styled from "@emotion/styled";
import { Link, useRouteMatch } from "react-router-dom";

import { Box } from "../Box";
import { Text } from "../Text";
import { PageProps } from "./types";
import { breakpoint } from "../../../utils/theme";

const Page = ({ children, title }: PageProps) => {
  let match = useRouteMatch("/pokebag");

  return (
    <Main>
      <Box
        sx={{ flexDirection: "row", justifyContent: "right", mb: 500 }}
        role="navigation"
      >
        <Link to="/"
          style={{
              marginRight:20
            }}
        >
          <Text>Pokedex</Text>
        </Link>
        {!match && (
          <Link to="/pokebag"
          >
            <Text>My Pokemon</Text>
          </Link>
        )}
      </Box>
      <Box role="main" sx={{ flexGrow: 1 }}>
        {title ? (
          <Box sx={{ mb: 500 }}>
            <Text
              as="h1"
              variant="heading"
              sx={{ fontWeight: 400, textTransform: "capitalize" }}
            >
              {title}
            </Text>
          </Box>
        ) : null}
        {children}
      </Box>
    </Main>
  );
};

export default Page;

const Main = styled.div`
  position: relative;
  // min-height: 100vh;
  margin: 0px auto;
  padding: 16px 30px;
  background-color: ${(props) => props.theme.color.background};
  // width: 100%;
  display: flex;
  flex-direction: column;
  ${breakpoint("tablet")`
    padding: 16px 40px;
  `}
  ${breakpoint("desktop")`
    padding: 16px 60px;
  `}
`;
