import { Group, Image, Stack } from "@mantine/core";
import items from "./assets/items.json";

type Props = { index: number; inline?: boolean };
export const Item = ({ index, inline = false }: Props) => {
  if (index < 0 || index >= items.length) {
    return <span>No item</span>;
  }

  const name = items[index].name;
  const img = `/items/${index + 1}.png`;

  if (inline) {
    return (
      <Group>
        <Image height="50px" w="auto" fit="contain" src={img} />
        <span>{name}</span>
      </Group>
    );
  }

  return (
    <Stack>
      <Image height="80px" w="auto" fit="contain" src={img} />
      <span>{name}</span>
    </Stack>
  );
};
