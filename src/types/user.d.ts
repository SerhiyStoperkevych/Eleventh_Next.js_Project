export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: 'admin' | 'user';
    createdAt: string;
    updatedAt: string;
  }