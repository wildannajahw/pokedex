import { Box } from "../Box";
import { Text } from "../Text";
import { BadgeProps } from "./types";

export default function Badge({
  title,
  bg = "text-5",
  color = "text-4",
}: BadgeProps) {
  return (
    <Box
      as="span"
      sx={{
        mr: 200,
        mb: 200,
        p: 200,
        backgroundColor: bg,
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <Text sx={{ color }}>{title}</Text>
    </Box>
  );
}
