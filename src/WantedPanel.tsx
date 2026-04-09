import { Box, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { ItemSelect } from "./ItemSelect";
import type { Item } from "./ItemSelect";
import { EmptyState } from "./components/EmptyState";
import { LookedForItemSkeleton } from "./LookedForItem";

const PLACEHOLDER_DATA: Item[] = [];

interface WantedPanelProps {
  data?: Item[];
}

export function WantedPanel({ data = PLACEHOLDER_DATA }: WantedPanelProps) {
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
        <ItemSelect
          data={data}
          value={[]}
          onChange={() => {}}
          placeholder="Search items..."
        />
      </Box>

      <Divider my="sm" />

      <LookedForItemSkeleton name="item" id={52} />

      <EmptyState hint="Add items you're hoping to get and they'll appear here with nearby spindown targets." />
    </Stack>
  );
}
