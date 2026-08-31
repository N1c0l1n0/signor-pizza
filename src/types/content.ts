export interface MenuItem {
  name: string;
  description: string;
  price: number;
  featured?: boolean;
  glutenFree?: boolean;
  image?: string;
  region?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface SiteAward {
  title: string;
  year?: string;
  description: string;
  icon: 'trophy' | 'flag' | 'shield';
}
