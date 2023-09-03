import type { DefineComponent } from "vue";

export interface BaseArticleData {
  id: string;
  image: {
    url: string;
    title: string;
  };
  title: string;
  quote: {
    text: string;
    attribution: string;
  };
  content: DefineComponent;
  sidebar?: DefineComponent;
  groupDescription?: DefineComponent;
}
