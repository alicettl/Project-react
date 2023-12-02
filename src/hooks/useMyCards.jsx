import { useEffect, useState } from "react";
import cardsService from "../services/cardService";

export const useMyCards = () => {
  const [cards, setCards] = useState([]); 

  useEffect(() => {
    const getCards = async () => {
      const { data } = await cardsService.getAll();
      setCards(data);
    };

    getCards();
  }, []);

  return cards;
};