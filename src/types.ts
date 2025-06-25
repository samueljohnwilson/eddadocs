import type { Component } from 'vue';
import type { Maps } from './enums/maps';

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

export interface BaseMarkdownArticleData {
  id: string;
  image?: {
    url: string;
    title: string;
  };
  title: string;
  quote?: {
    text: string;
    attribution: string;
  };
  sidebar?: Component;
  groupDescription?: Component;
  markdownPath: string; // Path to the markdown file
}

export interface MapMarker {
  name: string;
  coords: [number, number];
  description?: string;
  link?: string;
}

export interface MapConfig {
  bounds: [number, number][];
  minZoom: number;
  maxZoom: number;
  zoom: number;
  center: [number, number];
  url: string;
  markers?: MapMarker[];
}

export interface MapData {
  name: string;
  value: Maps;
  config: MapConfig;
}

export type MapList = Record<Maps, MapData>;
