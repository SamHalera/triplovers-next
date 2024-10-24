type MenuItemType = {
  label: string;
  path: string;
};

type MenuType = MenuItemType[];

type PublicPageType = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  navigationType: string;
  isHomePage: boolean;
  priority: number;
};

type RoomType = {
  id: number;
  documentId: string;
  name: string;
  subtitle: string;
  nbPeople: number;
  nbBeds: number;
  isAvailable: boolean;
  image: Media;
  details: string;
  price: string;
  currency: string;
};

type Media = {
  id: number;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
};
