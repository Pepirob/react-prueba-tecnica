import { useEffect, useState } from "react";
import { getCatImg } from "../services/catServices";

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`;
function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  const getImage = (firstWord) => {
    getCatImg(firstWord).then((newUrl) => setImageUrl(newUrl));
  };

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 1).join(" ");
    getImage(firstWord);
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}

export default useCatImage;
