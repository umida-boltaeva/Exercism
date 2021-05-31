//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  const GIGASECOND_IN_MS = 10 ** 12;
  return new Date(moment.getTime() + GIGASECOND_IN_MS);
};
