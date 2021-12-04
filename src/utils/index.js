export const numberToStringPorcentage = (number) => {
  if (number === 0) return "0%";
  return number > 0
    ? `${`+${number.toFixed(2)}%`}`
    : `${`${number.toFixed(2)}%`}`;
};
