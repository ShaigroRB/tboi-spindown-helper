import items from "./assets/items.json";

export const itemIndexByName = items.reduce(
  (acc, item, index) => {
    acc[item.name] = index;
    return acc;
  },
  {} as Record<string, number>,
);

export function getItemSourceFromName(name: string) {
  return `/items/${itemIndexByName[name] + 1}.png`;
}

export function getItemSourceFromId(id: number) {
  return `/items/${id + 1}.png`;
}

export const itemsNames = items.map((item) => item.name);
