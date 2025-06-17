import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Define response types
interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

interface ErrorResponse {
  error: string;
}

interface BankAccount {
  id: string;
  accountNumber: string;
  balance: number;
  type: string;
  currency: string;
  createdAt: string;
}

interface Transaction {
  id: string;
  type: string;
  amount: number;
  description: string;
  createdAt: string;
}

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add token to requests
api.interceptors.request.use((config) => {
  // Get token from cookie
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // If unauthorized, redirect to home page
      window.location.href = '/';
    }
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('An error occurred');
  }
);

// Auth service
export const authService = {
  register: async (data: { name: string; email: string; password: string }) => {
    return api.post('/auth/register', data);
  },

  login: async (data: { email: string; password: string }): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', data);
    return response;
  },

  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response;
    } catch (error) {
      return null;
    }
  }
};

// User service
export const userService = {
  getProfile: async () => {
    return api.get('/user/profile');
  },
};

// Bank account service
export const bankAccountService = {
  getAccounts: async () => {
    return api.get('/bank-account');
  },
  createAccount: async (data: { type: string; currency: string }) => {
    return api.post('/bank-account', data);
  },
  updateAccount: async (id: string, data: { type: string; currency: string; balance: number }) => {
    return api.put(`/bank-account/${id}`, data);
  },
  deleteAccount: async (id: string) => {
    return api.delete(`/bank-account/${id}`);
  },
};

// Transaction service
export const transactionService = {
  getTransactions: async () => {
    return api.get('/transaction');
  },
  createTransaction: async (data: { type: string; amount: number; description: string; bankAccountId: string }) => {
    return api.post('/transaction', data);
  },
  updateTransaction: async (id: string, data: { type: string; amount: number; description: string }) => {
    return api.put(`/transaction/${id}`, data);
  },
  deleteTransaction: async (id: string) => {
    return api.delete(`/transaction/${id}`);
  },
};

export default api; 