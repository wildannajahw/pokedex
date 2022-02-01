
import styled from "@emotion/styled";
import { breakpoint, spacing } from "../../utils/theme";
import { Text } from "../commons/Text";
import { Badge } from "../commons/Badge";
import { Box } from "../commons/Box";
import { DetailProps } from "./types";

export default function Detail({ moves, type }: DetailProps) {

  return (
    <Box
      sx={{
        borderRadius: "32px 32px 0px 0px",
        backgroundColor: "ui-1",
        pb: 500,
        pl: 500,
        pr: 500,
        pt: 700,
        marginRight: "-1rem",
        marginLeft: "-1rem",
        marginBottom: "-2rem",
        flex: 1,
      }}
    >
      <Box sx={{ mb: 300 }}>
        <Text as="h2" variant="heading" sx={{ fontWeight: 400 }}>
          Moves
        </Text>
      </Box>
      <Container>
        {moves?.map(({ move }) => (
          <Badge bg={type} title={move.name} key={move.name} />
        ))}
      </Container>
    </Box>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: ${spacing(500)};
  margin-bottom: 1rem; 

  ${breakpoint("tablet")`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `}
  ${breakpoint("desktop")`
    grid-template-columns: repeat(8, minmax(0, 1fr));
  `}
`;
