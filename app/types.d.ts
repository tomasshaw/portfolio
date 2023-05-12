declare type TBaseMenuItem = {
  name: string;
  link?: string;
};

declare type TMenuItemWithLink = TBaseMenuItem & {
  submenu?: TBaseMenuItem[];
};

declare type TMenuItem = TMenuItemWithLink | TMenuItemWithName;

declare type TProducts = {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  id: string;
};
