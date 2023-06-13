const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

const getCatImg = async (firstWord) => {
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?json=true`);
  const data = await res.json();
  const { url } = data;
  return url;
};

export { getRandomFact, getCatImg };
