export interface UseAxiosInstance {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

export interface ResponsePayload<T> {
  status: string;
  message: string;
  data: T;
}

export interface ServiceOrProduct {
  type: "single" | "multi";
  name: string;
  description: string;
  price: number;
  discount: number;
  discountedPrice: number;
  features: string[];
  images: string[];
  slug: string;
}

export interface ContactUs {
  fullName: string;
  email: string;
  message: string;
  phoneNumber: string;
}

export interface Consulting {
  fullName: string;
  email: string;
  service: string[];
  phoneNumber: string;
}
