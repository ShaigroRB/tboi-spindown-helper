import { Group, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

interface LookedForItemSkeletonProps {
  name: string;
  id: number;
}

export function LookedForItemSkeleton({
  name,
  id,
}: LookedForItemSkeletonProps) {
  return (
    <Stack gap={6}>
      <Group gap={6} align="center" fs="italic">
        <Text size="sm" fw={500}>
          {name}
        </Text>
        <Text size="sm" c="dimmed">
          #{id}
        </Text>
      </Group>

      <Group gap={6} align="center" wrap="nowrap">
        <ItemSkeleton />
        <Chevron />
        <ItemSkeleton />
        <Chevron />
        <ItemPill name={name} id={id} />
        <Chevron />
        <ItemSkeleton />
        <Chevron />
        <ItemSkeleton />
      </Group>
    </Stack>
  );
}

function ItemSkeleton() {
  return (
    <Stack gap={4} align="center" style={{ flexShrink: 0 }}>
      <Skeleton height={60} width={60} radius="sm" />
      <Group w="100%" gap="xs">
        <Skeleton height={10} width="50%" radius="xs" />
        <Skeleton height={10} width="30%" radius="xs" />
      </Group>
    </Stack>
  );
}

function Chevron() {
  return (
    <ThemeIcon variant="light" color="gray" size="lg" radius="xl">
      <IconChevronRight size={16} stroke={1.5} />
    </ThemeIcon>
  );
}

function ItemPill({ name, id }: { name: string; id: number }) {
  return (
    <Stack gap={4} align="center" style={{ flexShrink: 0 }}>
      <Skeleton
        style={(theme) => ({
          width: 60,
          height: 60,
          borderRadius: theme.radius.sm,
          border: `1px solid ${theme.colors.green[4]}`,
          backgroundColor: theme.colors.green[0],
        })}
      >
        {/* Image will go here */}
      </Skeleton>
      <Group gap="xs">
        <Text size="xs" fw={500} c="green">
          {name}
        </Text>
        <Text size="xs" c="green.6">
          #{id}
        </Text>
      </Group>
    </Stack>
  );
}
