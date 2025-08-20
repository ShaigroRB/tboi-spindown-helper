import { Container, Group, Skeleton, Stack } from "@mantine/core";
import { Item } from "./Item";

type Props = { index: number };
export const ItemNeighbors = ({ index }: Props) => {
  if (index < 0) {
    return (
      <Group>
        <Skeleton visible={true} width="100px" height="100px" /> ▶️
        <Skeleton visible={true} width="100px" height="100px" /> ▶️
        <Container
          w="100px"
          h="100px"
          style={{ border: "2px solid lightgreen", padding: "1rem" }}
        >
          <span>Pick an item</span>
        </Container>
        ▶️
        <Skeleton visible={true} width="100px" height="100px" /> ▶️
        <Skeleton visible={true} width="100px" height="100px" />
      </Group>
    );
  }
  return (
    <Group>
      <Item index={index + 2} /> ▶️
      <Item index={index + 1} /> ▶️
      <Stack style={{ border: "2px solid lightgreen", padding: "1rem" }}>
        <Item index={index} />
      </Stack>{" "}
      ▶️
      <Item index={index - 1} /> ▶️
      <Item index={index - 2} />
    </Group>
  );
};
