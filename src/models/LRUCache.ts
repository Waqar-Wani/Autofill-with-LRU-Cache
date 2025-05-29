interface CacheItem<T> {
  key: string;
  value: T;
}

export class LRUCache<T> {
  private capacity: number;
  private cache: Map<string, CacheItem<T>>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: string): T | null {
    if (!this.cache.has(key)) {
      return null;
    }

    // Get the item and move it to the end (most recently used)
    const item = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, item);
    return item.value;
  }

  put(key: string, value: T): void {
    // If key exists, remove it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If cache is full, remove the least recently used item
    else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    // Add the new item
    this.cache.set(key, { key, value });
  }

  clear(): void {
    this.cache.clear();
  }
} 