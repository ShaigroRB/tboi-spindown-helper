// Stub — will be implemented separately.
// This component wraps a Combobox-based multi-select with item sprite images,
// custom pill rendering (image + name + id badge), and id-prefixed search.

import {
  Group,
  MultiSelect,
  type MultiSelectProps,
  Image,
  Text,
} from "@mantine/core";
import { itemIndexByName, itemsNames } from "./utils";

export type Item = {
  id: number;
  name: string;
  spriteUrl: string;
};

const renderMultiSelectOption: MultiSelectProps["renderOption"] = ({
  option,
}) => (
  <Group gap="sm">
    <Image
      src={`/items/${itemIndexByName[option.value] + 1}.png`}
      h="30px"
      w="30px"
    />
    <Text size="sm">{option.value}</Text>
  </Group>
);

export type ItemSelectProps = {
  /** Currently selected items */
  value: string[];
  /** Called with the new list of ids when selection changes */
  onChange: (value: string[]) => void;
};

export function ItemSelect(props: ItemSelectProps) {
  // Implementation coming soon.
  return (
    <MultiSelect
      renderOption={renderMultiSelectOption}
      label="Items on the floor"
      placeholder="Search items..."
      data={itemsNames}
      searchable
      limit={50}
      {...props}
    />
  );
}
