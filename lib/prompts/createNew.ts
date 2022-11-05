

const getRarityNumber = (daysSinceLegendary: number, daysSinceEpic: number) => {
  const legendaryUpperBound = (1+(0.1*daysSinceLegendary)) / 100;
  const epicUpperBound = legendaryUpperBound + ((5+(0.5*daysSinceEpic)) / 100);
  const rareUpperBound = epicUpperBound + 0.2;

  const random = Math.random();

  if (random < legendaryUpperBound) return 30;
  if (random < epicUpperBound) return 20;
  if (random < rareUpperBound) return 10;
  return 0;
}


export { getRarityNumber };
