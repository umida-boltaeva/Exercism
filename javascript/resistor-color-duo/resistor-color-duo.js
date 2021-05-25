// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arrOfColors) => {
  return parseInt(`${colorCode(arrOfColors[0])}${colorCode(arrOfColors[1])}`);
};

const colorCode = (color) => {
  return COLORS.findIndex((elem) => color === elem);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
