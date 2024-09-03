import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

export interface FetchApiResponse<T = any> {
  response: T | null;
  error: string | null;
  loading: boolean;
}

export interface ContainerProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export interface BackgroundProps {
  src: string;
  className?: string;
  parentClassName?: string;
  isBackdrop?: boolean;
  colorBackdrop?: string;
  children: JSX.Element | JSX.Element[];
}

export interface ImagesProps {
  className: string;
  src: string;
  alt: string;
  cover?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export interface TabsProps {
  label: string;
  children: React.ReactNode;
}

export interface MotionComponentProps {
  initialO?: number;
  initialY?: number;
  initialX?: number;
  animateO?: number;
  animateY?: number;
  animateX?: number;
  delay?: number;
  duration: number;
  tag: ElementType;
  className: string;
  children?: ReactNode;
}

export interface BasicHeroProps {
  title: string;
  description: string;
}

export interface LandingCardPriceProps {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isHighlight: boolean;
  pathImg: string;
  price: number;
  title: string;
  description: string[];
  index: number;
}

export interface PriceCardProductProps {
  pathImg: string;
  price: number;
  title: string;
  description: string;
  index: number;
}

export interface PriceCardServiceProps {
  pathImg: string;
  price: number;
  title: string;
  description: string;
  list: string[];
  index: number;
}

export interface TemplateField {
  pathIcon: string;
  title: string;
  description: string;
}

export interface PriceServiceField {
  slug?: string;
  serviceTitle: string;
  message: string;
  top: {
    title: string;
    pathIcon: string;
  }[];
  bottom: {
    title: string;
    pathIcon: string;
    description: string;
  }[];
}

export interface InputType {
  isLoading?: boolean;
  error?: boolean;
  values: {
    fullName: string;
    email: string;
    message?: string;
    phoneNumber: string;
    service?: string;
  };
}

export interface OurService extends TemplateField {
  pathImg: string;
}

export interface BlogField extends TemplateField {
  date: string;
  topic: string;
}

export interface TestimonialField {
  name: string;
  job: string;
  subject: string;
  message: string;
  pathImg: string;
}

export interface PriceField {
  pathImg: string;
  title: string;
  price: number;
  description: string[];
}
