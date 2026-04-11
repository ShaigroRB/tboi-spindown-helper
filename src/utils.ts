import items from "./assets/items.json";

export const itemIndexByName = items.reduce(
  (acc, item, index) => {
    acc[item.name] = index;
    return acc;
  },
  {} as Record<string, number>,
);

export const itemsNames = items.map((item) => item.name);
