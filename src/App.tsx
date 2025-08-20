import {
  Center,
  Container,
  Divider,
  Group,
  Image,
  MultiSelect,
  Stack,
  Text,
  type MultiSelectProps,
} from "@mantine/core";
import { ItemNeighbors } from "./ItemNeighbors";
import items from "./assets/items.json";
import { useMemo, useState } from "react";
import { Item } from "./Item";

const indicesByNames = items.reduce(
  (acc, item, index) => {
    acc[item.name] = index;
    return acc;
  },
  {} as Record<string, number>,
);

const renderMultiSelectOption: MultiSelectProps["renderOption"] = ({
  option,
}) => (
  <Group gap="sm">
    <Image
      src={`/items/${indicesByNames[option.value] + 1}.png`}
      h="30px"
      w="30px"
    />
    <Text size="sm">{option.value}</Text>
  </Group>
);

function App() {
  const availableNames = useMemo(() => {
    return items.map((item) => item.name);
  }, []);
  const [namesSpindown, setNamesSpindown] = useState<string[]>([]);
  const [namesFloor, setNamesFloor] = useState<string[]>([]);

  return (
    <Container fluid style={{ textAlign: "center" }}>
      <h1>TBOI spindown helper</h1>
      <Group mx="xl" justify="space-between" gap="sm">
        <section>
          <h2>Items to spindown into</h2>
          <Center>
            <Stack>
              <MultiSelect
                renderOption={renderMultiSelectOption}
                label="Items wanted"
                placeholder="Pick items"
                data={availableNames}
                searchable
                value={namesSpindown}
                onChange={setNamesSpindown}
              />
              {namesSpindown.length === 0 && <ItemNeighbors index={-1} />}
              {namesSpindown.map((name) => (
                <ItemNeighbors key={name} index={indicesByNames[name]} />
              ))}
            </Stack>
          </Center>
        </section>
        <Divider orientation="vertical" size="xl" />
        <section>
          <h2>Available items on the floor</h2>
          <Center>
            <Stack>
              <MultiSelect
                renderOption={renderMultiSelectOption}
                label="Items on the floor"
                placeholder="Pick items"
                data={availableNames}
                searchable
                value={namesFloor}
                onChange={setNamesFloor}
              />
              {namesFloor.map((name) => {
                const floorIndex = indicesByNames[name];
                return (
                  <Group key={floorIndex}>
                    <Item index={floorIndex} />{" "}
                    <Divider orientation="vertical" />{" "}
                    {namesSpindown.length === 0 && "Pick 1 item wanted"}
                    <Stack gap="0px">
                      {namesSpindown.map((spindown) => {
                        const spindownIndex = indicesByNames[spindown];
                        const diff = floorIndex - spindownIndex;

                        return diff < 0 ? null : (
                          <Group>
                            <Item index={spindownIndex} inline />
                            <span>: {diff} spindown</span>
                          </Group>
                        );
                      })}
                    </Stack>
                  </Group>
                );
              })}
            </Stack>
          </Center>
        </section>
      </Group>
    </Container>
  );
}

export default App;
