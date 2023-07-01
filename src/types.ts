export interface BaseArticleData {
  id: string;
  className?: string;
  content: any;
  image: {
    url: string;
    title: string;
  };
  title: string;
  quote: {
    text: string;
    attribution: string;
  };
  sidebar?: any;
  groupDescription?: any;
}