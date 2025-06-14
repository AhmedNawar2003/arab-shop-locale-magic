
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    nameKey: 'luxury-sofa',
    descriptionKey: 'luxury-sofa-desc',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'furniture',
    inStock: true,
  },
  {
    id: '2',
    nameKey: 'modern-lamp',
    descriptionKey: 'modern-lamp-desc',
    price: 150,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'lighting',
    inStock: true,
  },
  {
    id: '3',
    nameKey: 'wooden-table',
    descriptionKey: 'wooden-table-desc',
    price: 800,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'furniture',
    inStock: true,
  },
  {
    id: '4',
    nameKey: 'comfortable-bed',
    descriptionKey: 'comfortable-bed-desc',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'bedroom',
    inStock: true,
  },
  {
    id: '5',
    nameKey: 'stylish-chair',
    descriptionKey: 'stylish-chair-desc',
    price: 300,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'furniture',
    inStock: false,
  },
  {
    id: '6',
    nameKey: 'elegant-cabinet',
    descriptionKey: 'elegant-cabinet-desc',
    price: 950,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'storage',
    inStock: true,
  },
];
