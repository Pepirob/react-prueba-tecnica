import { useEffect, useState } from "react";
import { getRandomFact } from "../services/catServices";

function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
}

export default useCatFact;
