
export const routes = {
  // Public routes
  home: '/',
  shop: '/shop',
  product: (id: string | number) => `/product/${id}`,
  
  // Auth routes
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  
  // Admin routes
  admin: {
    dashboard: '/admin',
    products: '/admin/products',
    orders: '/admin/orders',
    users: '/admin/users',
    analytics: '/admin/analytics',
    settings: '/admin/settings',
  },
  
  // Error pages
  notFound: '/404',
} as const;

export type Routes = typeof routes;
