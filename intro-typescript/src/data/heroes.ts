export type Owner = "DC" | "Marvel" | "LalitoDC";

export interface Hero {
  id: number;
  nombre: string;
  owner: Owner;
}

const SH: Hero[] = [
  {
    id: 1,
    nombre: "Zunni",
    owner: "LalitoDC",
  },
  {
    id: 2,
    nombre: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    nombre: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    nombre: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    nombre: "Pop-eye",
    owner: "Marvel",
  },
];

export const saludar = () => "Hola";

export const owners = ["DC", "Marvel", "LalitoDC"] as const;


export default SH;
