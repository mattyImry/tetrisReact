//utilities file for functions to be used in the app

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
