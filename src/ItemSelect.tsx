// Stub — will be implemented separately.
// This component wraps a Combobox-based multi-select with item sprite images,
// custom pill rendering (image + name + id badge), and id-prefixed search.

export interface Item {
  id: number;
  name: string;
  spriteUrl: string;
}

export interface ItemSelectProps {
  /** Full list of selectable items */
  data: Item[];
  /** Currently selected item ids */
  value: number[];
  /** Called with the new list of ids when selection changes */
  onChange: (value: number[]) => void;
  placeholder?: string;
}

export function ItemSelect(props: ItemSelectProps) {
  // Implementation coming soon.
  return "search items -- placeholder for item select";
}
