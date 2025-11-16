type Theme = 'light' | 'dark';
type Category = 'All' | 'Writing' | 'Design' | 'Productivity' | 'Marketing' | 'Development' | 'Video' | 'Audio' | 'Research' | 'SEO' | 'Image';
type SortOption = 'Upvotes (High to Low)' | 'Name (A-Z)';
type Page = 'home' | 'detail';
interface AITool {
  id: number;
  name: string;
  description: string;
  category: Exclude<Category, 'All'>;
  upvotes: number;
  productHuntUrl: string;
  howToUse: string[];
  logo: string;
  pricing: number | 'Free' | 'Freemium' | 'Subscription';
}
export type { Category, AITool, SortOption, Page, Theme };