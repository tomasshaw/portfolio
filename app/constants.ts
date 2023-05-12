const fotoSubmenuItems: TMenuItem[] = [
  { name: "Test", link: "/photogridtest" },
  { name: "Fotoproducto", link: "/fotoproducto" },
  { name: "Retratos", link: "/retratos" },
  { name: "Analogicas", link: "/analogicas" },
];

const videoSubmenuItems: TMenuItem[] = [
  { name: "Producciones", link: "/videoproducciones" },
  { name: "Cinematografia", link: "/cinematografia" },
];

export const menuItems: TMenuItem[] = [
  {
    name: "Fotografia",
    submenu: fotoSubmenuItems,
  },
  {
    name: "Bandas",
    link: "/bandas",
  },
  {
    name: "Video",
    submenu: videoSubmenuItems,
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
    image: "bandas/1.png",
  },
  {
    title: "Pepe y sus Amigos",
    subtitle: "Estadio River Plate",
    link: "/pinkfloyd",
    id: "pinkfloyd",
    image: "bandas/2.png",
  },
  {
    title: "Banda 3",
    subtitle: "Niceto Lado B \\ Buenos Aires - 2022",
    link: "/lamediadocena",
    id: "banda3",
    image: "bandas/3.png",
  },
  {
    title: "Chill Beats to study / work",
    subtitle: "Youtube.com \\ pepito",
    link: "/youtube",
    id: "chillbeats",
    image: "bandas/4.png",
  },
];
