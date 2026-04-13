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
    <Stack h="100%" gap={0} px="md" py="md">
      <Title order={2} size="h3">
        ON THE FLOOR
      </Title>

      <ItemSelect
        label="Items currently available to pick up"
        value={items}
        onChange={setItems}
      />

      <Divider my="sm" />

      {items.length === 0 && (
        <EmptyState hint="Add items from the floor and it'll show you how many spindowns are needed to reach your targets." />
      )}
    </Stack>
  );
}
