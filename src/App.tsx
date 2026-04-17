import {
  AppShell,
  Avatar,
  Box,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { WantedPanel } from "./WantedPanel";
import { FloorPanel } from "./FloorPanel";

function App() {
  const [lookingForItems, setLookingForItems] = useState<string[]>([]);

  return (
    <AppShell header={{ height: 60 }} padding={0}>
      <AppShell.Header bg="gray.9" px="md">
        <Group gap="sm" align="center" h="100%">
          <Avatar
            style={(theme) => ({
              border: `1px solid ${theme.colors.gray[4]}`,
            })}
            src="/items/708.png"
            alt="spindown dice"
            bg="gray"
          />
          <Stack gap="0">
            <Title order={1} size="h4">
              TBOI spindown helper
            </Title>
            <Text size="xs" c="dimmed">
              Repentance
            </Text>
          </Stack>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "calc(100vh - 52px)",
          }}
        >
          <Box
            style={(theme) => ({
              borderRight: `1px solid ${theme.colors.gray[2]}`,
            })}
          >
            <WantedPanel
              selectedItems={lookingForItems}
              onChange={setLookingForItems}
            />
          </Box>

          <Box>
            <FloorPanel lookingFor={lookingForItems} />
          </Box>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
