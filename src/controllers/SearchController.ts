import { SearchModel, SearchItem } from '../models/SearchModel';

export class SearchController {
  private model: SearchModel;
  private debounceTimeout: number | null = null;

  constructor() {
    this.model = new SearchModel();
  }

  private debounce(callback: (query: string) => void, delay: number) {
    return (query: string) => {
      if (this.debounceTimeout) {
        window.clearTimeout(this.debounceTimeout);
      }
      this.debounceTimeout = window.setTimeout(() => {
        callback(query);
      }, delay);
    };
  }

  search(query: string): SearchItem[] {
    return this.model.search(query);
  }

  getDebouncedSearch(callback: (results: SearchItem[]) => void): (query: string) => void {
    return this.debounce((query: string) => {
      const results = this.search(query);
      callback(results);
    }, 300);
  }
} 