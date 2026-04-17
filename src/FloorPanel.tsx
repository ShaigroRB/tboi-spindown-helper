import {
  Badge,
  Divider,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { ItemSelect } from "./ItemSelect";
import { EmptyState } from "./components/EmptyState";
import { useState } from "react";
import { getItemSourceFromId, itemIndexByName } from "./utils";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";

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

      {items.length > 0 && (
        <Stack>
          {items
            .map((item) => ({
              item,
              matches: computeMatches(item, lookingFor),
            }))
            .sort((a, b) => {
              const aMin = a.matches[0]?.spindowns ?? Infinity;
              const bMin = b.matches[0]?.spindowns ?? Infinity;
              return aMin - bMin;
            })
            .map(({ item, matches }) => (
              <FloorItem key={item} name={item} matches={matches} />
            ))}
        </Stack>
      )}
    </Stack>
  );
}

function computeMatches(name: string, lookingFor: string[]): SpindownMatch[] {
  const id = itemIndexByName[name];
  return lookingFor
    .map((targetName) => {
      const targetId = itemIndexByName[targetName];
      const diff = id - targetId;
      return { targetName, targetId, spindowns: diff };
    })
    .filter(({ spindowns }) => spindowns > 0)
    .sort((a, b) => a.spindowns - b.spindowns);
}

type SpindownMatch = {
  targetName: string;
  targetId: number;
  spindowns: number;
};

type FloorItemProps = {
  name: string;
  matches: SpindownMatch[];
};

const FloorItem = ({ name, matches }: FloorItemProps) => {
  const id = itemIndexByName[name];
  const src = getItemSourceFromId(id);

  return (
    <Paper
      p="sm"
      withBorder
      radius="md"
      style={{
        backgroundColor: "var(--mantine-color-dark-6)",
        ...(matches.length === 0 && {
          filter: "opacity(40%)",
        }),
      }}
    >
      <Group
        justify="space-between"
        align="center"
        mb={matches.length > 0 ? "xs" : 0}
      >
        <Group gap="sm" align="center">
          <Image
            src={src}
            alt={name}
            h={40}
            w={40}
            style={{ imageRendering: "pixelated" }}
          />
          <Stack gap={0}>
            <Text fw={700} size="sm">
              {name}
            </Text>
            <Text size="xs" c="dimmed">
              #{id}
            </Text>
          </Stack>
        </Group>
      </Group>

      {matches.length === 0 && (
        <Text size="xs" c="dimmed" fs="italic">
          No spindown match
        </Text>
      )}

      {matches.length > 0 && (
        <Stack gap={6}>
          {matches.map(({ targetName, targetId, spindowns }) => {
            const targetSrc = getItemSourceFromId(targetId);
            return (
              <Group key={targetId} gap="xs" align="center">
                <SpindownBadge spindowns={spindowns} />
                <ThemeIcon c="dimmed" variant="transparent" size="xs">
                  <IconArrowRight />
                </ThemeIcon>
                <Image
                  src={targetSrc}
                  alt={targetName}
                  h={28}
                  w={28}
                  style={{ imageRendering: "pixelated" }}
                />
                <Text size="sm" fw={600}>
                  {targetName}
                </Text>
                <Text size="xs" c="dimmed">
                  #{targetId}
                </Text>
              </Group>
            );
          })}
        </Stack>
      )}
    </Paper>
  );
};

const SpindownBadge = ({ spindowns }: { spindowns: number }) => {
  const label = spindowns === 1 ? "1 spindown" : `${spindowns} spindowns`;

  return (
    <Badge color="green" leftSection={<IconArrowDown size={12} />}>
      {label}
    </Badge>
  );
};
