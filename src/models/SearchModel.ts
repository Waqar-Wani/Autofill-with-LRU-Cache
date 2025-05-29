import { LRUCache } from './LRUCache';
import sampleData from '../data/sampleData.json';

export interface SearchItem {
  id: number;
  name: string;
}

export class SearchModel {
  private cache: LRUCache<SearchItem[]>;
  private data: SearchItem[];

  constructor() {
    this.cache = new LRUCache<SearchItem[]>(10);
    // Assuming sampleData is now directly an array of SearchItem
    this.data = sampleData as SearchItem[];
  }

  private highlightMatch(text: string, query: string): string {
    if (!query) return text;
    // Escape special characters in the query to use in regex
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  search(query: string): SearchItem[] {
    // Check cache first
    const cachedResults = this.cache.get(query);
    if (cachedResults) {
      return cachedResults;
    }

    if (!query) {
        return []; // Return empty array for empty query
    }

    // Filter and highlight results based on the 'name' property
    const results = this.data
      .filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      .map(item => ({
        ...item,
        name: this.highlightMatch(item.name, query),
      }));

    // Cache the results
    this.cache.put(query, results);
    return results;
  }
} 