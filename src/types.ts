import type { Component } from 'vue';

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
  content: Component;
  sidebar?: Component;
  groupDescription?: Component;
}
