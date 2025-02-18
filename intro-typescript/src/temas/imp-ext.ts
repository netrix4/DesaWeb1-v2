import SH, { Owner, saludar } from "./../data/heroes";

console.log(saludar());

export const getHeroId = (id: number) => {
  // return SH.find((hero) => hero.id === id)?.nombre ?? "Heroe no existe";
  return SH.find((hero) => hero.id === id);
};

const result = getHeroId(1);

console.log(result);

const getHeroesByOwner = (owner: Owner) => {
  return SH.filter((hero) => hero.owner === owner);
};

console.log("Obtener heroes por owner", getHeroesByOwner("LalitoDC"));
