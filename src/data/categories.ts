
export interface Category {
  id: string;
  nameKey: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: '1',
    nameKey: 'furniture',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🪑'
  },
  {
    id: '2',
    nameKey: 'lighting',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '💡'
  },
  {
    id: '3',
    nameKey: 'bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🛏️'
  },
  {
    id: '4',
    nameKey: 'storage',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '📦'
  },
  {
    id: '5',
    nameKey: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🍳'
  },
  {
    id: '6',
    nameKey: 'bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: '🚿'
  }
];
