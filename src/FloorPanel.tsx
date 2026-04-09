import { Box, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { ItemSelect } from "./ItemSelect";
import type { Item } from "./ItemSelect";
import { EmptyState } from "./components/EmptyState";

const PLACEHOLDER_DATA: Item[] = [];

interface FloorPanelProps {
  data?: Item[];
}

export function FloorPanel({ data = PLACEHOLDER_DATA }: FloorPanelProps) {
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
        <ItemSelect
          data={data}
          value={[]}
          onChange={() => {}}
          placeholder="Search items..."
        />
      </Box>

      <Divider my="sm" />

      <EmptyState hint="Add items from the floor and it'll show you how many spindowns are needed to reach your targets." />
    </Stack>
  );
}
