import { Divider, Stack, Title } from "@mantine/core";
import { ItemSelect } from "./components/ItemSelect";
import { EmptyState } from "./components/EmptyState";
import { LookedForItem } from "./LookedForItem";

interface WantedPanelProps {
  selectedItems: string[];
  onChange: (v: string[]) => void;
}

export function WantedPanel({ selectedItems, onChange }: WantedPanelProps) {
  return (
    <Stack h="100%" gap={0} px="md" py="md">
      <Title order={2} size="h3">
        LOOKING FOR
      </Title>

      <ItemSelect
        label="Items you're trying to spindown into"
        value={selectedItems}
        onChange={onChange}
      />

      <Divider my="sm" />

      {selectedItems.length === 0 && (
        <EmptyState hint="Add items you're hoping to get and they'll appear here with nearby spindown targets." />
      )}

      {selectedItems.length > 0 && (
        <Stack gap="xs">
          {selectedItems.map((item) => (
            <LookedForItem name={item} key={item} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
