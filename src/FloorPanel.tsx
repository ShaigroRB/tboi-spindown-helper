import { Box, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { ItemSelect } from "./ItemSelect";
import type { Item } from "./ItemSelect";
import { EmptyState } from "./components/EmptyState";
import { useState } from "react";

interface FloorPanelProps {
  lookingFor: string[];
}

export function FloorPanel({ lookingFor }: FloorPanelProps) {
  const [items, setItems] = useState<string[]>([]);
  return (
    <Stack h="100%" gap={0} px="md">
      <Group py="sm">
        <Title order={2} size="h3">
          ON THE FLOOR
        </Title>
        <Text size="md" c="dimmed">
          - Items currently available to pick up
        </Text>
      </Group>

      <Box p="md">
        <ItemSelect value={items} onChange={setItems} />
      </Box>

      <Divider my="sm" />

      {items.length === 0 && (
        <EmptyState hint="Add items from the floor and it'll show you how many spindowns are needed to reach your targets." />
      )}
    </Stack>
  );
}
