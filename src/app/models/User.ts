
export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  email: string;
  address?: {
    street?: string,
    city?: string,
    state?: string
  };
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
}