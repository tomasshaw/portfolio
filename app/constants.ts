type TMenuItem = {
  name: string;
  link: string;
};

export const menuItems: TMenuItem[] = [
  { name: "Fotografia", link: "/photogridtest" },
  { name: "Bandas", link: "/bandas" },
  { name: "Video", link: "/video" },
  { name: "Maquillaje", link: "/makeup" },
  { name: "Info", link: "/info" },
];

export type TProducts = {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  id: string;
};

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
    image: "mediadocena.webp",
  },
  {
    title: "Chill Beats to study / work",
    subtitle: "Youtube.com \\ pepito",
    link: "/youtube",
    id: "chillbeats",
    image: "pinkfloyd.webp",
  },
];
