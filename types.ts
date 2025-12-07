export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  isSignature?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export enum SectionId {
  HOME = 'home',
  CONCEPT = 'concept',
  MENU = 'menu',
  GALLERY = 'gallery',
  RESERVATION = 'reservation'
}