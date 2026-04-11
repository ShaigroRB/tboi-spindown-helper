import { Box, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { ItemSelect } from "./ItemSelect";
import type { Item } from "./ItemSelect";
import { EmptyState } from "./components/EmptyState";
import { LookedForItemSkeleton } from "./LookedForItem";

interface WantedPanelProps {
  selectedItems: string[];
  onChange: (v: string[]) => void;
}

export function WantedPanel({ selectedItems, onChange }: WantedPanelProps) {
  return (
    <Stack h="100%" gap={0} px="md">
      <Group py="sm">
        <Title order={2} size="h3">
          LOOKING FOR
        </Title>
        <Text size="md" c="dimmed">
          - Items you're trying to spindown into
        </Text>
      </Group>

      <Box p="md">
        <ItemSelect value={selectedItems} onChange={onChange} />
      </Box>

      <Divider my="sm" />

      <LookedForItemSkeleton name="item" id={52} />

      <EmptyState hint="Add items you're hoping to get and they'll appear here with nearby spindown targets." />
    </Stack>
  );
}
