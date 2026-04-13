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
import { getItemSourceFromName, itemsNames } from "./utils";

export type Item = {
  id: number;
  name: string;
  spriteUrl: string;
};

const renderMultiSelectOption: MultiSelectProps["renderOption"] = ({
  option,
}) => (
  <Group gap="sm">
    <Image src={getItemSourceFromName(option.value)} h="30px" w="30px" />
    <Text size="sm">{option.value}</Text>
  </Group>
);

export type ItemSelectProps = {
  /** Currently selected items */
  value: string[];
  /** Called with the new list of ids when selection changes */
  onChange: (value: string[]) => void;
  /** Label of the select */
  label: string;
};

export function ItemSelect(props: ItemSelectProps) {
  // Implementation coming soon.
  return (
    <MultiSelect
      renderOption={renderMultiSelectOption}
      placeholder="Search items..."
      data={itemsNames}
      searchable
      limit={50}
      {...props}
    />
  );
}
