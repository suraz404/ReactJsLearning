import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

// 1️⃣ Make the Magic Box
const CandyContext = createContext();

// 2️⃣ Floor6 eats the candy
export const Floor6 = () => {
  const candy = useContext(CandyContext);
  return <h1>I got {candy}</h1>;
};

// 3️⃣ Floor5 passes Floor6
export const Floor5 = () => <Floor6 />;

// 4️⃣ Floor4 passes Floor5
export const Floor4 = () => <Floor5 />;

// 5️⃣ Floor3 passes Floor4
export const Floor3 = () => <Floor4 />;

// 6️⃣ Floor2 passes Floor3
export const Floor2 = () => <Floor3 />;

// 7️⃣ Floor1 passes Floor2
export const Floor1 = () => <Floor2 />;
