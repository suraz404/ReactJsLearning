import { Floor1 } from "./useContext";

export const Appp = () => {
  const candy = "🍬 Yummy Candy";

  return (
    <CandyContext.Provider value={candy}>
      <Floor1 />
    </CandyContext.Provider>
  );
};
