import { Box, Group, Image, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { itemsNames, getItemSourceFromId, itemIndexByName } from "./utils";

const ItemDisplay = ({ id }: { id: number }) => {
  if (id < 0 || id >= itemsNames.length) {
    return <span>No item</span>;
  }

  const name = itemsNames[id];
  const src = getItemSourceFromId(id);

  return (
    <Stack gap={3} align="center" style={{ flexShrink: 0 }}>
      <Image
        src={src}
        alt={name}
        h="60px"
        w="60px"
        style={{ borderRadius: 6, imageRendering: "pixelated" }}
      />
      <Stack gap="xs" align="center">
        <Text size="sm" fw={500}>
          {name}
        </Text>
        <Text size="sm" c="dimmed">
          #{id}
        </Text>
      </Stack>
    </Stack>
  );
};

const TargetItemDisplay = ({ id }: { id: number }) => {
  return (
    <Box
      px="md"
      style={{
        borderRadius: 8,
        border: "3px dotted var(--mantine-color-green-4)",
        flexShrink: 0,
      }}
    >
      <ItemDisplay id={id} />
    </Box>
  );
};

export const LookedForItem = ({ name }: { name: string }) => {
  const id = itemIndexByName[name];

  return (
    <Stack
      gap={6}
      w="100%"
      pl="sm"
      py="2px"
      style={{
        borderLeft: "5px solid var(--mantine-color-dark-4)",
      }}
    >
      <Group gap={4} align="center">
        <Text fw={700}>{name}</Text>
        <Text fw={700} c="dimmed">
          #{id}
        </Text>
      </Group>

      <Group gap={6} justify="space-between" wrap="nowrap">
        <ItemDisplay id={id + 2} />
        <Chevron />
        <ItemDisplay id={id + 1} />
        <Chevron />
        <TargetItemDisplay id={id} />
        <Chevron />
        <ItemDisplay id={id - 1} />
        <Chevron />
        <ItemDisplay id={id - 2} />
      </Group>
    </Stack>
  );
};

const Chevron = () => {
  return (
    <Box c="dimmed">
      <IconChevronRight />
    </Box>
  );
};
