import { Center, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export function EmptyState({ hint }: { hint: string }) {
  return (
    <Center h="100%" p="xl">
      <Stack align="center" gap="xs" maw={300}>
        <ThemeIcon variant="light" color="gray" size="lg" radius="xl">
          <IconSearch size={16} stroke={1.5} />
        </ThemeIcon>
        <Text size="xs" c="dimmed" ta="center" lh={1.6}>
          {hint}
        </Text>
      </Stack>
    </Center>
  );
}
