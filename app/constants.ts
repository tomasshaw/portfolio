type TBaseMenuItem = {
  name: string;
  link: string;
};

type TMenuItem = TBaseMenuItem & {
  submenu?: TBaseMenuItem[];
};

export type TProducts = {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  id: string;
};

export const fotoSubmenuItems: TMenuItem[] = [
  { name: "Bandas", link: "/bandas" },
  { name: "Fotoproducto", link: "/fotoproducto" },
  { name: "Retratos", link: "/retratos" },
  { name: "Analogicas", link: "/analogicas" },
];

export const menuItems: TMenuItem[] = [
  {
    name: "Fotografia",
    link: "/photogridtest",
    submenu: fotoSubmenuItems,
  },
  {
    name: "Bandas",
    link: "/bandas",
  },
  {
    name: "Video",
    link: "/video",
  },
  {
    name: "Maquillaje",
    link: "/makeup",
  },
  {
    name: "Info",
    link: "/info",
  },
];

export const bandas: TProducts[] = [
  {
    title: "La Media Docena",
    subtitle: "Niceto Lado B \\ Buenos Aires - 2022",
    link: "/lamediadocena",
    id: "mediadocena",
    image: "mediadocena.webp",
  },
  {
    title: "Pink Floyd",
    subtitle: "Estadio River Plate",
    link: "/pinkfloyd",
    id: "pinkfloyd",
    image: "pinkfloyd.webp",
  },
  {
    title: "Banda 3",
    subtitle: "Niceto Lado B \\ Buenos Aires - 2022",
    link: "/lamediadocena",
    id: "banda3",
    image: "3.webp",
  },
  {
    title: "Chill Beats to study / work",
    subtitle: "Youtube.com \\ pepito",
    link: "/youtube",
    id: "chillbeats",
    image: "4.webp",
  },
];
