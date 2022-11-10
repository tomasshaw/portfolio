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
};

export const bandas: TProducts[] = [
  {
    title: "La Media Docena",
    subtitle: "Niceto Lado B \\ Buenos Aires - 2022",
    link: "/lamediadocena",
  },
  {
    title: "Pink Floyd",
    subtitle: "Estadio River Plate",
    link: "/pinkfloyd",
  },
  {
    title: "Banda 3",
    subtitle: "Niceto Lado B \\ Buenos Aires - 2022",
    link: "/lamediadocena",
  },
  {
    title: "Chill Beats to study / work",
    subtitle: "Youtube.com \\ pepito",
    link: "/youtube",
  },
];
